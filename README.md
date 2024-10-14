# Compliant RPCs

Keeping track of which RPC endpoints are exposing modern versions of the [Polkadot JSON-RPC spec](https://paritytech.github.io/json-rpc-interface-spec/)

## Legend of icons meanings:

- ✅: The node is on a version that is either compliant with the JSON-RPC spec, or PAPI is able to make it compliant with its middlewares.
- 👴: The node is using a version of the PolkadotSDK node which is so old that PAPI can't translate it to the stable spec of the JSON-RPC API.
- ☠️:: The node doesn't seem to expose the new JSON-RPC spec.
- ⏰: The node stated that it supports the new JSON-RPC methods. However, for some reason it's not behaving according to the spec and thus no response are being received.
- ⛔: There was a connectivity issue while trying to stablish the connection with the node. Therefore, we can't know whether this node is compliant or not.

## Results

- [Polkadot](./results/polkadot.txt)
- [Kusama](./results/kusama.txt)
- [Paseo](./results/paseo.txt)

### Logs

You will be able to find the logs of the messages that were sent over the wire for each problematic endpoint inside the `./results/wire-logs/` folder.
