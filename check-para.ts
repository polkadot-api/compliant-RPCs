import { createClient } from "@polkadot-api/substrate-client"
import { getWsProvider, WsEvent } from "polkadot-api/ws-provider/web"
import { getObservableClient } from "@polkadot-api/observable-client"
import {
  catchError,
  concatMap,
  debounceTime,
  endWith,
  filter,
  from,
  ignoreElements,
  map,
  mergeMap,
  Observable,
  of,
  race,
  ReplaySubject,
  startWith,
  take,
  timer,
} from "rxjs"
import { parsed, withPolkadotSdkCompat } from "polkadot-api/polkadot-sdk-compat"
import { withLogsRecorder } from "polkadot-api/logs-provider"
import { withNumericIds } from "./with-numeric-ids"
import { kusama, paseo, polkadot, type ParachainConfig } from "./chains"
import { appendFileSync } from "node:fs"

const enum StateType {
  OK,
  OLD_SPEC,
  RPC_ERROR,
  TIMEOUT,
  ERROR,
}

const checkEndpoint = (input: string) => {
  const logs: Array<string> = []
  let errors = new ReplaySubject<void>()

  const daProvider = getWsProvider(input, (e) => {
    if (e.type === WsEvent.CLOSE || e.type === WsEvent.ERROR) {
      errors.next()
    }
  })

  const client = getObservableClient(
    createClient(
      withPolkadotSdkCompat(
        parsed(withNumericIds)(
          withLogsRecorder((log) => {
            logs.push(log)
          }, daProvider),
        ),
      ),
    ),
  )
  const chainHead = client.chainHead$()

  const inner = race(
    chainHead.runtime$.pipe(
      filter(Boolean),
      take(1),
      map(() => StateType.OK),
    ),
    chainHead.finalized$.pipe(
      debounceTime(100),
      take(3),
      ignoreElements(),
      endWith(StateType.OLD_SPEC),
    ),
    errors.pipe(take(3), ignoreElements(), endWith(StateType.RPC_ERROR)),
    timer(40_000).pipe(map(() => StateType.TIMEOUT)),
  ).pipe(
    catchError(() => of(StateType.ERROR)),
    map((type) => {
      return { type, logs }
    }),
  )

  const result: typeof inner = new Observable((observer) => {
    const subscription = inner.subscribe(observer)
    return () => {
      subscription.unsubscribe()
      errors.unsubscribe()
      try {
        chainHead.unfollow()
      } catch (_) {}
      client.destroy()
    }
  })
  return result
}

const checkParachain = (input: ParachainConfig) => {
  return from(Object.entries(input.providers)).pipe(
    mergeMap(([name, uri]) =>
      checkEndpoint(uri).pipe(
        map((result) => ({ chain: input, name, result })),
      ),
    ),
  )
}

const icons: Record<StateType, string> = {
  [StateType.ERROR]: "☠️",
  [StateType.TIMEOUT]: "⏰",
  [StateType.RPC_ERROR]: "⛔",
  [StateType.OLD_SPEC]: "👴",
  [StateType.OK]: "✅",
}

Object.entries({ polkadot, kusama, paseo }).forEach(([relayChain, chain]) => {
  const file = `./results/${relayChain}.txt`
  from(
    chain.filter(
      (x) => !x.isUnreachable && Object.keys(x.providers).length > 0,
    ),
  )
    .pipe(concatMap((x) => checkParachain(x).pipe(startWith(x.info))))
    .subscribe({
      next(v) {
        if (typeof v === "string") {
          appendFileSync(file, `\n\n-------${v.toUpperCase()}-------\n`, "utf8")
        } else {
          const icon = icons[v.result.type]
          if (v.result.type !== StateType.OK) {
            Bun.write(
              `./results/logs/${relayChain}/${v.chain.info}_${v.name}.logs`,
              v.result.logs.join("\n"),
            )
          }
          appendFileSync(file, `${icon} ${v.name}\n`, "utf8")
        }
      },
      error: console.error,
      complete() {
        console.log("all done!", relayChain)
      },
    })
})
