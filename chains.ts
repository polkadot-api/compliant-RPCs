export interface ParachainConfig {
  homepage: string
  info: string
  paraId: number
  providers: Record<string, string>
  text: string
  ui: any
  isUnreachable?: true
}

export const polkadot: Array<ParachainConfig> = [
  {
    homepage: "https://acala.network/",
    info: "acala",
    paraId: 2000,
    providers: {
      "Acala Foundation 0": "wss://acala-rpc-0.aca-api.network",
      "Acala Foundation 1": "wss://acala-rpc-1.aca-api.network",
      // 'Acala Foundation 2': 'wss://acala-rpc-2.aca-api.network/ws', // https://github.com/polkadot-js/apps/issues/6965
      "Acala Foundation 3": "wss://acala-rpc-3.aca-api.network/ws",
      Dwellir: "wss://acala-rpc.dwellir.com",
      // LuckyFriday: 'wss://rpc-acala.luckyfriday.io', // https://github.com/polkadot-js/apps/issues/10728
      // 'Automata 1RPC': 'wss://1rpc.io/aca' // https://github.com/polkadot-js/apps/issues/8648
      OnFinality: "wss://acala-polkadot.api.onfinality.io/public-ws",
      // 'Polkawallet 0': 'wss://acala.polkawallet.io' // https://github.com/polkadot-js/apps/issues/9760
    },
    text: "Acala",
    ui: {
      color: "#645AFF",
    },
  },
  {
    homepage: "https://ajuna.io",
    info: "ajuna",
    paraId: 2051,
    providers: {
      AjunaNetwork: "wss://rpc-para.ajuna.network",
      IBP1: "wss://ajuna.ibp.network",
      IBP2: "wss://ajuna.dotters.network",
      OnFinality: "wss://ajuna.api.onfinality.io/public-ws",
      RadiumBlock: "wss://ajuna.public.curie.radiumblock.co/ws",
    },
    text: "Ajuna Network",
    ui: {
      color: "#161212",
    },
  },
  {
    homepage: "https://www.aresprotocol.io/",
    info: "odyssey",
    paraId: 2028,
    providers: {
      // AresProtocol: 'wss://wss.odyssey.aresprotocol.io' // https://github.com/polkadot-js/apps/issues/9059
    },
    text: "Ares Odyssey",
    ui: {
      color: "#1295F0",
    },
  },
  {
    homepage: "https://astar.network",
    info: "astar",
    paraId: 2006,
    providers: {
      Astar: "wss://rpc.astar.network",
      "Automata 1RPC": "wss://1rpc.io/astr",
      Blast: "wss://astar.public.blastapi.io",
      Dwellir: "wss://astar-rpc.dwellir.com",
      OnFinality: "wss://astar.api.onfinality.io/public-ws",
      RadiumBlock: "wss://astar.public.curie.radiumblock.co/ws",
    },
    text: "Astar",
    ui: {
      color: "#1b6dc1d9",
    },
  },
  {
    homepage: "https://www.aventus.io/",
    info: "aventus",
    paraId: 2056,
    providers: {
      Aventus: "wss://public-rpc.mainnet.aventus.network",
    },
    text: "Aventus",
    ui: {
      color: "#1d2733",
    },
  },
  {
    homepage: "https://crowdloan.bifrost.app",
    info: "bifrost",
    paraId: 2030,
    providers: {
      Dwellir: "wss://bifrost-polkadot-rpc.dwellir.com",
      IBP1: "wss://bifrost-polkadot.ibp.network",
      IBP2: "wss://bifrost-polkadot.dotters.network",
      Liebi: "wss://hk.p.bifrost-rpc.liebi.com/ws",
      LiebiEU: "wss://eu.bifrost-polkadot-rpc.liebi.com/ws",
      // OnFinality: 'wss://bifrost-polkadot.api.onfinality.io/public-ws',
      RadiumBlock: "wss://bifrost.public.curie.radiumblock.co/ws",
    },
    text: "Bifrost",
    ui: {
      color: "#5a25f0",
    },
  },
  {
    homepage: "https://www.bitgreen.org",
    info: "bitgreen",
    paraId: 2048,
    providers: {
      Bitgreen: "wss://mainnet.bitgreen.org",
      // OnFinality: 'wss://bitgreen.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9993
    },
    text: "Bitgreen",
    ui: {
      color: "#224851",
    },
  },
  {
    homepage: "https://centrifuge.io",
    info: "centrifuge",
    paraId: 2031,
    providers: {
      Centrifuge: "wss://fullnode.centrifuge.io",
      Dwellir: "wss://centrifuge-rpc.dwellir.com",
      LuckyFriday: "wss://rpc-centrifuge.luckyfriday.io",
      OnFinality: "wss://centrifuge-parachain.api.onfinality.io/public-ws",
    },
    text: "Centrifuge",
    ui: {
      color: "#fcc367",
    },
  },
  {
    homepage: "https://clover.finance",
    info: "clover",
    paraId: 2002,
    providers: {
      // Clover: 'wss://rpc-para.clover.finance' // https://github.com/polkadot-js/apps/issues/10172
      // OnFinality: 'wss://clover.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9986
    },
    text: "Clover",
    ui: {
      color: "linear-gradient(to right, #52ad75, #7cc773)",
    },
  },
  {
    homepage: "http://www.coinversation.io/",
    info: "coinversation",
    paraId: 2027,
    providers: {
      // Coinversation: 'wss://rpc.coinversation.io/' // https://github.com/polkadot-js/apps/issues/6635
    },
    text: "Coinversation",
    ui: {
      color: "#e6017a",
    },
  },
  {
    homepage: "https://composable.finance/",
    info: "composable",
    paraId: 2019,
    providers: {
      Composable: "wss://rpc.composable.finance",
      Dwellir: "wss://composable-rpc.dwellir.com",
      // OnFinality: 'wss://composable.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9986
    },
    text: "Composable Finance",
    ui: {
      color: "#C90E8A",
    },
  },
  {
    homepage: "https://mnet.io/?ref=polkadotjs",
    info: "continuum",
    paraId: 3346,
    providers: {
      MNet: "wss://continuum-rpc-1.metaverse.network/wss",
    },
    text: "Continuum",
    ui: {
      color: "linear-gradient(94deg, #2B388F 2.95%, #DB126E 97.18%)",
    },
  },
  {
    homepage: "https://crust.network",
    info: "crustParachain",
    paraId: 2008,
    providers: {
      Crust: "wss://crust-parachain.crustapps.net",
      "Crust APP": "wss://crust-parachain.crustnetwork.app",
      "Crust CC": "wss://crust-parachain.crustnetwork.cc",
      "Crust XYZ": "wss://crust-parachain.crustnetwork.xyz",
      // OnFinality: 'wss://crust-polkadot.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/10013
    },
    text: "Crust",
    ui: {},
  },
  {
    homepage: "https://darwinia.network/",
    info: "darwinia",
    paraId: 2046,
    providers: {
      Darwinia: "wss://rpc.darwinia.network",
      Dcdao: "wss://darwinia-rpc.dcdao.box",
      Dwellir: "wss://darwinia-rpc.dwellir.com",
    },
    text: "Darwinia",
    ui: {
      color: "#FF0083",
    },
  },
  {
    homepage: "https://efinity.io",
    info: "efinity",
    paraId: 2021,
    providers: {
      // NOTE We don't support connections to this parachain at all.
      //
      // 1. The chain is migrated away from the parachain with all balances
      // 2. There is a forked relay-involved which we don't support
      //
      // Additional details in original removal at
      // https://github.com/polkadot-js/apps/pull/9555/files#r1225095086
    },
    text: "Efinity",
    ui: {
      color: "#496ddb",
    },
  },
  {
    homepage: "https://energywebx.com/",
    info: "ewx",
    paraId: 3345,
    providers: {
      "Energy Web": "wss://public-rpc.mainnet.energywebx.com/",
    },
    text: "Energy Web X",
    ui: {
      color: "#53B1FF",
    },
  },
  {
    homepage: "https://equilibrium.io/",
    info: "equilibrium",
    paraId: 2011,
    providers: {
      // Dwellir: 'wss://equilibrium-rpc.dwellir.com'
      // OnFinality: 'wss://equilibrium.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9977
      // Equilibrium: 'wss://node.equilibrium.io' // https://github.com/polkadot-js/apps/issues/10174
    },
    text: "Equilibrium",
    ui: {
      color: "#1792ff",
    },
  },
  {
    homepage: "https://frequency.xyz",
    info: "frequency",
    paraId: 2091,
    providers: {
      Dwellir: "wss://frequency-rpc.dwellir.com",
      "Frequency 0": "wss://0.rpc.frequency.xyz",
      "Frequency 1": "wss://1.rpc.frequency.xyz",
      OnFinality: "wss://frequency-polkadot.api.onfinality.io/public-ws",
    },
    text: "Frequency",
    ui: {
      color: "#00b6af",
    },
  },
  {
    homepage: "https://geminis.network/",
    info: "geminis",
    isUnreachable: true,
    paraId: 2038,
    providers: {
      Geminis: "wss://rpc.geminis.network",
    },
    text: "Geminis",
    ui: {},
  },
  {
    homepage: "https://hashed.network/",
    info: "hashed",
    paraId: 2093,
    providers: {
      "Hashed Systems 1": "wss://c1.hashed.network",
      // 'Hashed Systems 2': 'wss://c2.hashed.network', // https://github.com/polkadot-js/apps/issues/10912
      // 'Hashed Systems 3': 'wss://c3.hashed.network' // https://github.com/polkadot-js/apps/issues/10912
    },
    text: "Hashed Network",
    ui: {
      color: "#9199A9",
    },
  },
  {
    homepage: "https://hydration.net/",
    info: "hydradx",
    paraId: 2034,
    providers: {
      Dwellir: "wss://hydradx-rpc.dwellir.com",
      "Galactic Council": "wss://rpc.hydradx.cloud",
      Helikon: "wss://rpc.helikon.io/hydradx",
      IBP1: "wss://hydradx.paras.ibp.network",
      IBP2: "wss://hydration.dotters.network",
      // OnFinality: 'wss://hydradx.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9986
      // ZeePrime: 'wss://rpc-lb.data6.zp-labs.net:8443/hydradx/ws/?token=2ZGuGivPJJAxXiT1hR1Yg2MXGjMrhEBYFjgbdPi' // https://github.com/polkadot-js/apps/issues/9760
    },
    text: "Hydration",
    ui: {
      color: "#240E32",
    },
  },
  {
    homepage: "https://hyperbridge.network",
    info: "hyperbridge",
    paraId: 3367,
    providers: {
      BlockOps: "wss://hyperbridge-nexus-rpc.blockops.network",
      IBP1: "wss://nexus.ibp.network",
      IBP2: "wss://nexus.dotters.network",
    },
    text: "Hyperbridge (Nexus)",
    ui: {
      color: "#ED6FF1",
    },
  },
  {
    homepage: "https://dot.crowdloan.integritee.network/",
    info: "integritee",
    paraId: 3359,
    providers: {
      Dwellir: "wss://integritee-rpc.dwellir.com",
      Integritee: "wss://polkadot.api.integritee.network",
    },
    text: "Integritee Network",
    ui: {
      color: "#658ea9",
    },
  },
  {
    homepage: "https://integritee.network",
    info: "integritee",
    paraId: 2039,
    providers: {
      // Dwellir: 'wss://integritee-rpc.dwellir.com',
      // Integritee: 'wss://polkadot.api.integritee.network'
    },
    text: "Integritee Network",
    ui: {
      color: "#2e154b",
    },
  },
  {
    homepage: "https://interlay.io/",
    info: "interlay",
    paraId: 2032,
    providers: {
      Dwellir: "wss://interlay-rpc.dwellir.com",
      "Kintsugi Labs": "wss://api.interlay.io/parachain",
      LuckyFriday: "wss://rpc-interlay.luckyfriday.io/",
      // OnFinality: 'wss://interlay.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9986
    },
    text: "Interlay",
    ui: {
      color: "#3E96FF",
    },
  },
  {
    homepage: "https://invarch.network/",
    info: "invarch",
    paraId: 3340,
    providers: {
      Dwellir: "wss://invarch-rpc.dwellir.com",
    },
    text: "InvArch",
    ui: {
      color: "linear-gradient(278deg, #f7d365 5.74%, #ff408a 99.41%)",
    },
  },
  {
    homepage: "https://totemaccounting.com/",
    info: "kapex",
    paraId: 2007,
    providers: {
      // Dwellir: 'wss://kapex-rpc.dwellir.com'
      // OnFinality: 'wss://kapex-parachain.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9986
      // Totem: 'wss://k-ui.kapex.network' // https://github.com/polkadot-js/apps/issues/9616
    },
    text: "Kapex",
    ui: {
      color:
        "linear-gradient(158deg, rgba(226,157,0,1) 0%, rgba(234,55,203,1) 100%)",
    },
  },
  {
    homepage: "https://www.kilt.io/",
    info: "kilt",
    paraId: 2086,
    providers: {
      BOTLabs: "wss://spiritnet.kilt.io/",
      Dwellir: "wss://kilt-rpc.dwellir.com",
      IBP1: "wss://kilt.ibp.network",
      IBP2: "wss://kilt.dotters.network",
    },
    text: "KILT Spiritnet",
    ui: {
      color: "#8c145a",
    },
  },
  {
    homepage: "https://kylin.network/",
    info: "kylin",
    paraId: 2052,
    providers: {
      // 'Kylin Network': 'wss://polkadot.kylin-node.co.uk' // https://github.com/polkadot-js/apps/issues/10030
    },
    text: "Kylin",
    ui: {
      color: "#ed007e",
    },
  },
  {
    homepage: "https://laosnetwork.io/",
    info: "laos",
    paraId: 3370,
    providers: {
      Dwellir: "wss://laos-rpc.dwellir.com",
      "freeverse.io": "wss://rpc.laos.laosfoundation.io",
    },
    text: "Laos",
    ui: {
      color:
        "linear-gradient(90deg, #25143B 0%, #613D93 29.69%, #EF9365 69.79%, #E2CF61 100%)",
    },
  },
  {
    homepage: "https://www.litentry.com/",
    info: "litentry",
    paraId: 2013,
    providers: {
      Dwellir: "wss://litentry-rpc.dwellir.com",
      Litentry: "wss://rpc.litentry-parachain.litentry.io",
      // OnFinality: 'wss://litentry.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9993
    },
    text: "Litentry",
    ui: {
      color: "#15B786",
    },
  },
  {
    homepage: "https://logion.network/",
    info: "logion",
    paraId: 3354,
    providers: {
      "Logion 1": "wss://para-rpc01.logion.network",
      // 'Logion 2': 'wss://para-rpc02.logion.network' // https://github.com/polkadot-js/apps/issues/10890
    },
    text: "Logion",
    ui: {
      color: "rgb(21, 38, 101)",
    },
  },
  {
    homepage: "https://manta.network",
    info: "manta",
    paraId: 2104,
    providers: {
      "Manta Network": "wss://ws.manta.systems",
      // OnFinality: 'wss://manta.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9977
    },
    text: "Manta",
    ui: {
      color: "#2070a6",
    },
  },
  {
    homepage: "https://moonbeam.network/networks/moonbeam/",
    info: "moonbeam",
    paraId: 2004,
    providers: {
      Allnodes: "wss://moonbeam-rpc.publicnode.com",
      // 'Automata 1RPC': 'wss://1rpc.io/glmr', // https://github.com/polkadot-js/apps/issues/10566
      Blast: "wss://moonbeam.public.blastapi.io",
      Dwellir: "wss://moonbeam-rpc.dwellir.com",
      IBP1: "wss://moonbeam.ibp.network",
      IBP2: "wss://moonbeam.dotters.network",
      "Moonbeam Foundation": "wss://wss.api.moonbeam.network",
      OnFinality: "wss://moonbeam.api.onfinality.io/public-ws",
      RadiumBlock: "wss://moonbeam.public.curie.radiumblock.co/ws",
      UnitedBloc: "wss://moonbeam.unitedbloc.com",
    },
    text: "Moonbeam",
    ui: {
      color: "#000000",
    },
  },
  {
    homepage: "https://moonsama.com",
    info: "moonsama",
    paraId: 3334,
    providers: {
      // Moonsama: 'wss://rpc.moonsama.com/ws' // https://github.com/polkadot-js/apps/issues/10289
    },
    text: "Moonsama",
    ui: {
      color: "#1a202c",
    },
  },
  {
    homepage: "https://mythos.foundation/",
    info: "mythos",
    paraId: 3369,
    providers: {
      parity: "wss://polkadot-mythos-rpc.polkadot.io",
    },
    text: "Mythos",
    ui: {
      color: "#262528",
    },
  },
  {
    homepage: "https://neuroweb.ai",
    info: "neuroweb",
    paraId: 2043,
    providers: {
      Dwellir: "wss://neuroweb-rpc.dwellir.com",
      TraceLabs: "wss://parachain-rpc.origin-trail.network",
    },
    text: "NeuroWeb",
    ui: {
      color: "#000000",
    },
  },
  {
    homepage: "https://nodle.com",
    info: "nodle",
    paraId: 2026,
    providers: {
      Dwellir: "wss://nodle-rpc.dwellir.com",
      OnFinality: "wss://nodle-parachain.api.onfinality.io/public-ws",
    },
    text: "Nodle",
    ui: {
      color: "#1ab394",
    },
  },
  {
    homepage: "https://oak.tech",
    info: "oak",
    isUnreachable: true,
    paraId: 2090,
    providers: {
      OAK: "wss://rpc.oak.tech",
    },
    text: "OAK Network",
    ui: {
      color: "#A8278C",
    },
  },
  {
    homepage: "https://www.omnibtc.finance",
    info: "omnibtc",
    isUnreachable: true,
    paraId: 2053,
    providers: {
      OmniBTC: "wss://psc-parachain.coming.chat",
    },
    text: "OmniBTC",
    ui: {
      color: "#6759E9",
    },
  },
  {
    homepage: "https://parallel.fi",
    info: "parallel",
    paraId: 2012,
    providers: {
      Dwellir: "wss://parallel-rpc.dwellir.com",
      Parallel: "wss://polkadot-parallel-rpc.parallel.fi",
      // OnFinality: 'wss://parallel.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/9986
    },
    text: "Parallel",
    ui: {
      color: "#ef18ac",
    },
  },
  {
    homepage: "https://peaq.network/",
    info: "peaq",
    paraId: 3338,
    providers: {
      // OnFinality: 'wss://peaq.api.onfinality.io/public-ws'
    },
    text: "peaq",
    ui: {
      color: "#281C66",
    },
  },
  {
    homepage: "https://pendulumchain.org/",
    info: "pendulum",
    paraId: 2094,
    providers: {
      // Dwellir: 'wss://pendulum-rpc.dwellir.com',
      PendulumChain: "wss://rpc-pendulum.prd.pendulumchain.tech",
    },
    text: "Pendulum",
    ui: {
      color: "#49E2FD",
    },
  },
  {
    homepage: "https://phala.network",
    info: "phala",
    paraId: 2035,
    providers: {
      Dwellir: "wss://phala-rpc.dwellir.com",
      Helikon: "wss://rpc.helikon.io/phala",
      OnFinality: "wss://phala.api.onfinality.io/public-ws",
      Phala: "wss://api.phala.network/ws",
      RadiumBlock: "wss://phala.public.curie.radiumblock.co/ws",
      // Rockx: 'wss://rockx-phala.w3node.com/polka-public-phala/ws' // https://github.com/polkadot-js/apps/issues/10728
    },
    text: "Phala Network",
    ui: {
      color: "#c6fa4c",
    },
  },
  {
    homepage: "https://www.polimec.org/",
    info: "polimec",
    paraId: 3344,
    providers: {
      Amforc: "wss://polimec.rpc.amforc.com",
      Helikon: "wss://rpc.helikon.io/polimec",
      IBP1: "wss://polimec.ibp.network",
      IBP2: "wss://polimec.dotters.network",
      "Polimec Foundation": "wss://rpc.polimec.org",
    },
    text: "Polimec",
    ui: {
      color: "#25311C",
    },
  },
  {
    homepage: "https://polkadex.trade/crowdloans",
    info: "polkadex",
    paraId: 3363,
    providers: {
      // Dwellir: 'wss://polkadex-parachain-rpc.dwellir.com',
      // OnFinality: 'wss://polkadex-parachain.api.onfinality.io/public-ws',
      // RadiumBlock: 'wss://polkadex-parachain.public.curie.radiumblock.co/ws'
    },
    text: "Polkadex",
    ui: {
      color: "#7C30DD",
    },
  },
  {
    homepage: "https://polkadex.trade/",
    info: "polkadex",
    paraId: 2040,
    providers: {
      Dwellir: "wss://polkadex-parachain-rpc.dwellir.com",
      OnFinality: "wss://polkadex-parachain.api.onfinality.io/public-ws",
      RadiumBlock: "wss://polkadex-parachain.public.curie.radiumblock.co/ws",
    },
    text: "Polkadex",
    ui: {
      color: "#7C30DD",
    },
  },
  {
    homepage: "http://robonomics.network/",
    info: "robonomics",
    paraId: 3388,
    providers: {
      Airalab: "wss://polkadot.rpc.robonomics.network/",
    },
    text: "Robonomics",
    ui: {
      color: "#e6007a",
    },
  },
  {
    homepage: "https://sora.org/",
    info: "sora",
    paraId: 2025,
    providers: {
      Soramitsu: "wss://ws.parachain-collator-3.pc3.sora2.soramitsu.co.jp",
    },
    text: "SORA",
    ui: {
      color: "#2D2926",
    },
  },
  {
    homepage: "https://subdao.network/",
    info: "subdao",
    isUnreachable: true,
    paraId: 2018,
    providers: {
      SubDAO: "wss://parachain-rpc.subdao.org",
    },
    text: "SubDAO",
    ui: {
      color: "linear-gradient(50deg, #F20092 0%, #FF4D5D 100%)",
    },
  },
  {
    homepage: "http://subgame.org/",
    info: "subgame",
    paraId: 2017,
    providers: {
      // SubGame: 'wss://gamma.subgame.org/' // https://github.com/polkadot-js/apps/pull/6761
    },
    text: "SubGame Gamma",
    ui: {
      color: "#EB027D",
    },
  },
  {
    homepage: "https://subsocial.network/",
    info: "subsocial",
    paraId: 2101,
    providers: {
      Dappforce: "wss://para.subsocial.network",
      Dwellir: "wss://subsocial-rpc.dwellir.com",
      // OnFinality: 'wss://subsocial-polkadot.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9977
    },
    text: "Subsocial",
    ui: {
      color: "#b9018c",
    },
  },
  {
    homepage: "https://www.t3rn.io/",
    info: "t3rn",
    paraId: 3333,
    providers: {
      t3rn: "wss://ws.t3rn.io",
    },
    text: "t3rn",
    ui: {
      color: "#6f3bb2",
    },
  },
  {
    homepage: "https://unique.network/",
    info: "unique",
    paraId: 2037,
    providers: {
      Dwellir: "wss://unique-rpc.dwellir.com",
      "Geo Load Balancer": "wss://ws.unique.network",
      IBP1: "wss://unique.ibp.network",
      IBP2: "wss://unique.dotters.network",
      // OnFinality: 'wss://unique.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/10030
      "Unique America": "wss://us-ws.unique.network",
      "Unique Asia": "wss://asia-ws.unique.network",
      "Unique Europe": "wss://eu-ws.unique.network",
    },
    text: "Unique Network",
    ui: {
      color: "#40BCFF",
    },
  },
  {
    homepage: "https://www.watr.org/",
    info: "watr",
    paraId: 2058,
    providers: {
      // Watr: 'wss://watr-rpc.watr-api.network' // https://github.com/polkadot-js/apps/issues/10890
    },
    text: "Watr Network",
    ui: {
      color: "#373b39",
    },
  },
  {
    homepage: "https://zeitgeist.pm",
    info: "zeitgeist",
    paraId: 2092,
    providers: {
      OnFinality: "wss://zeitgeist.api.onfinality.io/public-ws",
      ZeitgeistPM: "wss://main.rpc.zeitgeist.pm/ws",
    },
    text: "Zeitgeist",
    ui: {
      color:
        "linear-gradient(180deg, rgba(32,90,172,1) 0%, rgba(26,72,138,1) 50%, rgba(13,36,69,1) 100%)",
    },
  },
]

export const kusama: Array<ParachainConfig> = [
  {
    homepage: "https://a.band",
    info: "aband",
    paraId: 2257,
    providers: {
      // 'Aband DAO': 'wss://rpc-parachain.a.band' // https://github.com/polkadot-js/apps/issues/9334
    },
    text: "Aband",
    ui: {
      color: "#7358ff",
    },
  },
  {
    homepage: "https://acurast.com",
    info: "acurast",
    paraId: 2239,
    providers: {
      Acurast: "wss://public-rpc.canary.acurast.com",
      // Acurast: 'wss://acurast-canarynet-ws.prod.gke.papers.tech' // https://github.com/polkadot-js/apps/issues/10667
    },
    text: "Acurast Canary",
    ui: {
      color: "#000000",
    },
  },
  {
    homepage: "https://centrifuge.io/altair",
    info: "altair",
    paraId: 2088,
    providers: {
      Centrifuge: "wss://fullnode.altair.centrifuge.io",
      OnFinality: "wss://altair.api.onfinality.io/public-ws",
    },
    text: "Altair",
    ui: {
      color: "#ffb700",
    },
  },
  {
    homepage: "https://pendulumchain.org/amplitude",
    info: "amplitude",
    paraId: 2124,
    providers: {
      Dwellir: "wss://amplitude-rpc.dwellir.com",
      PendulumChain: "wss://rpc-amplitude.pendulumchain.tech",
    },
    text: "Amplitude",
    ui: {
      color: "#5DEFA7",
    },
  },
  {
    homepage: "https://ajuna.io",
    info: "bajun",
    paraId: 2119,
    providers: {
      AjunaNetwork: "wss://rpc-parachain.bajun.network",
      OnFinality: "wss://bajun.api.onfinality.io/public-ws",
      RadiumBlock: "wss://bajun.public.curie.radiumblock.co/ws",
    },
    text: "Bajun Network",
    ui: {
      color: "#161212",
    },
  },
  {
    homepage: "https://app.basilisk.cloud",
    info: "basilisk",
    paraId: 2090,
    providers: {
      Basilisk: "wss://rpc.basilisk.cloud",
      Dwellir: "wss://basilisk-rpc.dwellir.com",
      // OnFinality: 'wss://basilisk.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9414
    },
    text: "Basilisk",
    ui: {
      color: "#49E49F",
    },
  },
  {
    homepage: "https://ksm.vtoken.io/?ref=polkadotjs",
    info: "bifrost",
    paraId: 2001,
    providers: {
      Dwellir: "wss://bifrost-rpc.dwellir.com",
      Liebi: "wss://bifrost-rpc.liebi.com/ws",
      LiebiUS: "wss://us.bifrost-rpc.liebi.com/ws",
      // OnFinality: 'wss://bifrost-parachain.api.onfinality.io/public-ws'
    },
    text: "Bifrost",
    ui: {
      color: "#5a25f0",
    },
  },
  {
    homepage: "https://www.calamari.network/",
    info: "calamari",
    paraId: 2084,
    providers: {
      "Manta Network": "wss://calamari.systems",
    },
    text: "Calamari",
    ui: {
      color: "#000000",
    },
  },
  {
    homepage: "https://crab.network",
    info: "crab",
    paraId: 2105,
    providers: {
      Darwinia: "wss://crab-rpc.darwinia.network/",
      Dcdao: "wss://crab-rpc.dcdao.box",
      Dwellir: "wss://darwiniacrab-rpc.dwellir.com",
    },
    text: "Crab",
    ui: {
      color: "#512DBC",
    },
  },
  {
    homepage: "https://crust.network/",
    info: "shadow",
    paraId: 2012,
    providers: {
      Crust: "wss://rpc-shadow.crust.network/",
      "Crust APP": "wss://rpc-shadow.crustnetwork.app",
      "Crust CC": "wss://rpc-shadow.crustnetwork.cc",
      "Crust XYZ": "wss://rpc-shadow.crustnetwork.xyz",
    },
    text: "Crust Shadow",
    ui: {},
  },
  {
    homepage: "https://crust.network/",
    info: "shadow",
    isUnreachable: true,
    paraId: 2225,
    providers: {
      // also duplicated right above (hence marked unreachable)
      // Crust: 'wss://rpc-shadow.crust.network/' // https://github.com/polkadot-js/apps/issues/8355
    },
    text: "Crust Shadow 2",
    ui: {},
  },
  {
    homepage: "",
    info: "curio",
    paraId: 3339,
    providers: {
      Curio: "wss://parachain.curioinvest.com/",
    },
    text: "Curio",
    ui: {
      color: "rgb(96, 98, 246)",
    },
  },
  {
    homepage: "https://ipci.io",
    info: "ipci",
    paraId: 2222,
    providers: {
      Airalab: "wss://ipci.rpc.robonomics.network",
    },
    text: "DAO IPCI",
    ui: {},
  },
  {
    homepage: "https://dorafactory.org/kusama/",
    info: "dorafactory",
    paraId: 2115,
    providers: {
      // DORA: 'wss://kusama.dorafactory.org' // https://github.com/polkadot-js/apps/issues/9748
    },
    text: "Dora Factory",
    ui: {
      color: "#FF761C",
    },
  },
  {
    homepage: "https://genshiro.io",
    info: "Genshiro",
    paraId: 2024,
    providers: {
      // Genshiro: 'wss://node.genshiro.io' // https://github.com/polkadot-js/apps/issues/10174
    },
    text: "Genshiro",
    ui: {
      color: "#e8662d",
    },
  },
  {
    homepage: "https://genshiro.equilibrium.io",
    info: "genshiro",
    isUnreachable: true,
    paraId: 2226,
    providers: {
      // Equilibrium: 'wss://node.genshiro.io' // https://github.com/polkadot-js/apps/issues/10174
    },
    text: "Genshiro crowdloan 2",
    ui: {
      color: "#e8662d",
    },
  },
  {
    homepage: "https://gmordie.com",
    info: "gm",
    paraId: 2123,
    providers: {
      // GMorDieDAO: 'wss://kusama.gmordie.com', // https://github.com/polkadot-js/apps/issues/8457
      // 'GM Intern': 'wss://intern.gmordie.com', // https://github.com/polkadot-js/apps/issues/9381
      // TerraBioDAO: 'wss://ws-node-gm.terrabiodao.org', // https://github.com/polkadot-js/apps/issues/8867
      // Leemo: 'wss://leemo.gmordie.com', // https://github.com/polkadot-js/apps/issues/9712
      // 'bLd Nodes': 'wss://ws.gm.bldnodes.org', // https://github.com/polkadot-js/apps/issues/9947
    },
    text: "GM",
    ui: {
      color: "#f47b36",
    },
  },
  {
    homepage: "https://hyperbridge.network",
    info: "hyperbridge",
    paraId: 3340,
    providers: {
      // BlockOps: 'wss://hyperbridge-messier-rpc.blockops.network' // https://github.com/polkadot-js/apps/issues/10555
    },
    text: "Hyperbridge (Messier)",
    ui: {
      color: "#ED6FF1",
    },
  },
  {
    homepage: "https://imbue.network",
    info: "imbue",
    paraId: 2121,
    providers: {
      "Imbue Network 0": "wss://kusama.imbuenetwork.com",
      // 'Imbue Network 1': 'wss://collator.production.imbue.network' // https://github.com/polkadot-js/apps/issues/9848
    },
    text: "Imbue Network",
    ui: {
      color: "#baff36",
    },
  },
  {
    homepage: "https://integritee.network",
    info: "integritee",
    paraId: 2015,
    providers: {
      Integritee: "wss://kusama.api.integritee.network",
      OnFinality: "wss://integritee-kusama.api.onfinality.io/public-ws",
    },
    text: "Integritee Network",
    ui: {
      color: "#2e154b",
    },
  },
  {
    homepage: "https://invarch.network/tinkernet",
    info: "tinker",
    paraId: 2125,
    providers: {
      // 'InvArch Team': 'wss://tinker.invarch.network', // https://github.com/polkadot-js/apps/issues/8623
      Dwellir: "wss://tinkernet-rpc.dwellir.com",
      // OnFinality: 'wss://invarch-tinkernet.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/9955
    },
    text: "InvArch Tinkernet",
    ui: {
      color: "#161616",
    },
  },
  {
    homepage: "https://kabocha.network",
    info: "kabocha",
    paraId: 2113,
    providers: {
      JelliedOwl: "wss://kabocha.jelliedowl.net",
    },
    text: "Kabocha",
    ui: {
      color: "repeating-radial-gradient(black, black 4px, yellow 5px)",
    },
  },
  {
    homepage: "https://acala.network/karura/join-karura",
    info: "karura",
    paraId: 2000,
    providers: {
      "Acala Foundation 0": "wss://karura-rpc-0.aca-api.network",
      "Acala Foundation 1": "wss://karura-rpc-1.aca-api.network",
      "Acala Foundation 2": "wss://karura-rpc-2.aca-api.network/ws",
      "Acala Foundation 3": "wss://karura-rpc-3.aca-api.network/ws",
      Dwellir: "wss://karura-rpc.dwellir.com",
      // LuckyFriday: 'wss://rpc-karura.luckyfriday.io',  // https://github.com/polkadot-js/apps/issues/10663
      OnFinality: "wss://karura.api.onfinality.io/public-ws",
      // 'Polkawallet 0': 'wss://karura.polkawallet.io' // https://github.com/polkadot-js/apps/issues/9383
    },
    text: "Karura",
    ui: {
      color: "#ff4c3b",
    },
  },
  {
    homepage: "https://phala.network/",
    info: "khala",
    paraId: 2004,
    providers: {
      Dwellir: "wss://khala-rpc.dwellir.com",
      Helikon: "wss://rpc.helikon.io/khala",
      OnFinality: "wss://khala.api.onfinality.io/public-ws",
      Phala: "wss://khala-api.phala.network/ws",
      RadiumBlock: "wss://khala.public.curie.radiumblock.co/ws",
      // Rockx: 'wss://rockx-khala.w3node.com/polka-public-khala/ws' // https://github.com/polkadot-js/apps/issues/10728
    },
    text: "Khala Network",
    ui: {
      color: "#03f3f3",
    },
  },
  {
    homepage: "https://dico.io/",
    info: "kico",
    paraId: 2107,
    providers: {
      // 'DICO Foundation': 'wss://rpc.kico.dico.io' // https://github.com/polkadot-js/apps/issues/9266
      // 'DICO Foundation 2': 'wss://rpc.api.kico.dico.io' // https://github.com/polkadot-js/apps/issues/8203
    },
    text: "KICO",
    ui: {
      color: "#29B58D",
    },
  },
  {
    homepage: "https://dico.io/",
    info: "kico 2",
    paraId: 2235,
    providers: {
      // 'DICO Foundation': 'wss://rpc.kico2.dico.io' // https://github.com/polkadot-js/apps/issues/8415
    },
    text: "KICO 2",
    ui: {
      color: "#29B58D",
    },
  },
  {
    homepage: "https://kintsugi.interlay.io/",
    info: "kintsugi",
    paraId: 2092,
    providers: {
      Dwellir: "wss://kintsugi-rpc.dwellir.com",
      "Kintsugi Labs": "wss://api-kusama.interlay.io/parachain",
      // LuckyFriday: 'wss://rpc-kintsugi.luckyfriday.io/', // https://github.com/polkadot-js/apps/issues/9947
      OnFinality: "wss://kintsugi.api.onfinality.io/public-ws",
    },
    text: "Kintsugi BTC",
    ui: {
      color: "#1a0a2d",
    },
  },
  {
    homepage: "http://apron.network/",
    info: "kpron",
    isUnreachable: true,
    paraId: 2019,
    providers: {
      Kpron: "wss://kusama-kpron-rpc.apron.network/",
    },
    text: "Kpron",
    ui: {
      color: "linear-gradient(45deg, #0099F7 0%, #2E49EB 100%)",
    },
  },
  {
    homepage: "https://virto.network/",
    info: "kreivo",
    paraId: 2281,
    providers: {
      Kippu: "wss://kreivo.kippu.rocks/",
      Virto: "wss://kreivo.io/",
    },
    text: "Kreivo - By Virto",
    ui: {
      color: "#294940",
      identityIcon: "polkadot",
    },
  },
  {
    homepage: "https://krest.peaq.network/",
    info: "krest",
    paraId: 2241,
    providers: {
      Dwellir: "wss://krest-rpc.dwellir.com",
      Krest: "wss://wss-krest.peaq.network/",
      OnFinality: "wss://krest.api.onfinality.io/public-ws",
      // UnitedBloc: 'wss://krest.unitedbloc.com/' https://github.com/polkadot-js/apps/issues/10997
    },
    text: "Krest",
    ui: {},
  },
  {
    homepage: "https://listen.io/",
    info: "listen",
    paraId: 2118,
    providers: {
      // 'Listen Foundation 1': 'wss://rpc.mainnet.listen.io', // https://github.com/polkadot-js/apps/issues/9069
      // 'Listen Foundation 2': 'wss://wss.mainnet.listen.io' // https://github.com/polkadot-js/apps/issues/9106
    },
    text: "Listen Network",
    ui: {
      color: "#FFAD0A",
    },
  },
  {
    homepage: "https://www.litentry.com/",
    info: "litmus",
    paraId: 2106,
    providers: {
      // Litentry: 'wss://rpc.litmus-parachain.litentry.io' // https://github.com/polkadot-js/apps/issues/10912
    },
    text: "Litmus",
    ui: {
      color: "#3913D3",
    },
  },
  {
    homepage: "https://loomx.io/",
    info: "loomNetwork",
    paraId: 2080,
    providers: {
      // LoomNetwork: 'wss://kusama.dappchains.com' // https://github.com/polkadot-js/apps/issues/5888
    },
    text: "Loom Network",
    ui: {},
  },
  {
    homepage: "https://mangata.finance",
    info: "mangata",
    paraId: 2110,
    providers: {
      "Mangata Archive": "wss://kusama-archive.mangata.online",
      "Mangata RPC": "wss://kusama-rpc.mangata.online",
    },
    text: "Mangata",
    ui: {
      color: "#030408",
    },
  },
  {
    homepage: "https://www.aresprotocol.io/mars",
    info: "mars",
    paraId: 2008,
    providers: {
      // AresProtocol: 'wss://wss.mars.aresprotocol.io' // https://github.com/polkadot-js/apps/issues/8937
    },
    text: "Mars",
    ui: {
      color: "#E56239",
    },
  },
  {
    homepage: "https://moonbeam.network/networks/moonriver/",
    info: "moonriver",
    paraId: 2023,
    providers: {
      Allnodes: "wss://moonriver-rpc.publicnode.com",
      Blast: "wss://moonriver.public.blastapi.io",
      Dwellir: "wss://moonriver-rpc.dwellir.com",
      "Moonbeam Foundation": "wss://wss.api.moonriver.moonbeam.network",
      OnFinality: "wss://moonriver.api.onfinality.io/public-ws",
      RadiumBlock: "wss://moonriver.public.curie.radiumblock.co/ws",
      UnitedBloc: "wss://moonriver.unitedbloc.com",
    },
    text: "Moonriver",
    ui: {
      color: "#06353d",
    },
  },
  {
    homepage: "https://parallel.fi",
    info: "heiko",
    paraId: 2085,
    providers: {
      // OnFinality: 'wss://parallel-heiko.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/9964
      Parallel: "wss://heiko-rpc.parallel.fi",
    },
    text: "Parallel Heiko",
    ui: {
      color: "#42d5de",
    },
  },
  {
    homepage: "https://parallel.fi",
    info: "heiko",
    isUnreachable: true,
    paraId: 2126,
    providers: {},
    text: "Parallel Heiko 2",
    ui: {
      color: "#42d5de",
    },
  },
  {
    homepage: "https://picasso.composable.finance/",
    info: "picasso",
    paraId: 2087,
    providers: {
      Composable: "wss://rpc.composablenodes.tech",
      Dwellir: "wss://picasso-rpc.dwellir.com",
      // LuckyFriday: 'wss://rpc-picasso.luckyfriday.io' // https://github.com/polkadot-js/apps/issues/9947
    },
    text: "Picasso",
    ui: {
      color: "#000000",
    },
  },
  {
    homepage: "https://kylin.network/",
    info: "pichiu",
    paraId: 2102,
    providers: {
      // 'Kylin Network': 'wss://kusama.kylin-node.co.uk' // https://github.com/polkadot-js/apps/issues/9560
    },
    text: "Pichiu",
    ui: {
      color: "#ed007e",
    },
  },
  {
    homepage: "https://pioneer.bit.country/?ref=polkadotjs",
    info: "pioneer",
    paraId: 2096,
    providers: {
      MetaverseNetwork: "wss://pioneer-rpc-3.bit.country/wss",
      // OnFinality: 'wss://pioneer.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/9955
    },
    text: "Pioneer",
    ui: {
      color: "#000000",
    },
  },
  {
    homepage: "https://polkasmith.polkafoundry.com/",
    info: "polkasmith",
    paraId: 2009,
    providers: {
      // PolkaSmith: 'wss://wss-polkasmith.polkafoundry.com' // https://github.com/polkadot-js/apps/issues/6595
    },
    text: "PolkaSmith by PolkaFoundry",
    ui: {
      color: "#0DDDFB",
    },
  },
  {
    homepage: "",
    info: "qpn",
    paraId: 2274,
    providers: {
      // FerrumNetwork: 'wss://qpn.svcs.ferrumnetwork.io/' // https://github.com/polkadot-js/apps/issues/10172
    },
    text: "Quantum Portal Network",
    ui: {
      color: "#b37700",
    },
  },
  {
    homepage: "https://unique.network/",
    info: "quartz",
    paraId: 2095,
    providers: {
      Dwellir: "wss://quartz-rpc.dwellir.com",
      // OnFinality: 'wss://quartz.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/9972
      "Geo Load Balancer": "wss://ws-quartz.unique.network",
      "Unique America": "wss://us-ws-quartz.unique.network",
      "Unique Asia": "wss://asia-ws-quartz.unique.network",
      "Unique Europe": "wss://eu-ws-quartz.unique.network",
    },
    text: "QUARTZ by UNIQUE",
    ui: {
      color: "#FF4D6A",
    },
  },
  {
    homepage: "https://riodefi.com",
    info: "riodefi",
    paraId: 2227,
    providers: {
      // RioProtocol: 'wss://rio-kusama.riocorenetwork.com' // https://github.com/polkadot-js/apps/issues/9261
    },
    text: "RioDeFi",
    ui: {
      color: "#4E7AED",
    },
  },
  {
    homepage: "http://robonomics.network/",
    info: "robonomics",
    paraId: 2048,
    providers: {
      Airalab: "wss://kusama.rpc.robonomics.network/",
      // Dwellir: 'wss://robonomics-rpc.dwellir.com', // https://github.com/polkadot-js/apps/issues/10912
      // Leemo: 'wss://robonomics.leemo.me', // https://github.com/polkadot-js/apps/issues/9817
      // OnFinality: 'wss://robonomics.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/9824
      Samsara: "wss://robonomics.0xsamsara.com",
    },
    text: "Robonomics",
    ui: {
      color: "#000000",
    },
  },
  {
    homepage: "http://robonomics.network/",
    info: "robonomics",
    isUnreachable: true,
    paraId: 2240,
    providers: {
      Airalab: "wss://kusama.rpc.robonomics.network/",
      // Leemo: 'wss://robonomics.leemo.me', // https://github.com/polkadot-js/apps/issues/9817
      // OnFinality: 'wss://robonomics.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/9824
      Samsara: "wss://robonomics.0xsamsara.com",
    },
    text: "Robonomics 2",
    ui: {
      color: "#2949d3",
    },
  },
  {
    homepage: "https://clover.finance/",
    info: "sakura",
    isUnreachable: true,
    paraId: 2016,
    providers: {
      Clover: "wss://api-sakura.clover.finance",
    },
    text: "Sakura",
    ui: {
      color: "#ff5995",
    },
  },
  {
    homepage: "https://shiden.astar.network/",
    info: "shiden",
    paraId: 2007,
    providers: {
      Astar: "wss://rpc.shiden.astar.network",
      Blast: "wss://shiden.public.blastapi.io",
      Dwellir: "wss://shiden-rpc.dwellir.com",
      OnFinality: "wss://shiden.api.onfinality.io/public-ws",
      RadiumBlock: "wss://shiden.public.curie.radiumblock.co/ws",
    },
    text: "Shiden",
    ui: {
      color: "#5923B2",
    },
  },
  {
    homepage: "https://shiden.astar.network/",
    info: "shiden",
    isUnreachable: true,
    paraId: 2120,
    providers: {
      StakeTechnologies: "wss://rpc.shiden.astar.network",
    },
    text: "Shiden Crowdloan 2",
    ui: {
      color: "#5923B2",
    },
  },
  {
    homepage: "https://icenetwork.io/snow",
    info: "snow",
    paraId: 2129,
    providers: {
      // IceNetwork: 'wss://snow-rpc.icenetwork.io' // https://github.com/polkadot-js/apps/issues/9405
    },
    text: "SNOW Network",
    ui: {},
  },
  {
    homepage: "https://sora.org/",
    info: "sora",
    paraId: 2011,
    providers: {
      Soramitsu: "wss://ws.parachain-collator-2.c2.sora2.soramitsu.co.jp",
    },
    text: "SORA",
    ui: {
      color: "#2D2926",
    },
  },
  {
    homepage: "http://subgame.org/",
    info: "subgame",
    paraId: 2018,
    providers: {
      // SubGame: 'wss://gamma.subgame.org/' // https://github.com/polkadot-js/apps/issues/7982
    },
    text: "SubGame Gamma",
    ui: {
      color: "#EB027D",
    },
  },
  {
    homepage: "https://subsocial.network/",
    info: "subsocialX",
    paraId: 2100,
    providers: {
      // 'Dappforce 1': 'wss://para.subsocial.network'
    },
    text: "SubsocialX",
    ui: {
      color: "#69058C",
    },
  },
  {
    homepage: "https://www.t3rn.io/",
    info: "t1rn",
    paraId: 3334,
    providers: {
      // t3rn: 'wss://rpc.t1rn.io' // https://github.com/polkadot-js/apps/issues/10091
    },
    text: "t1rn",
    ui: {
      color: "#131532",
    },
  },
  {
    homepage: "https://www.datahighway.com/",
    info: "tanganika",
    paraId: 2116,
    providers: {
      // DataHighway: 'wss://tanganika.datahighway.com' // https://github.com/polkadot-js/apps/issues/9383
    },
    text: "Tanganika",
    ui: {
      color: "linear-gradient(-90deg, #9400D3 0%, #5A5CA9 50%, #00BFFF 100%)",
    },
  },
  {
    homepage: "https://trustbase.network/",
    info: "trustbase",
    isUnreachable: true,
    paraId: 2078,
    providers: {},
    text: "TrustBase",
    ui: {
      color: "#ff43aa",
    },
  },
  {
    homepage: "https://oak.tech",
    info: "turing",
    paraId: 2114,
    providers: {
      Dwellir: "wss://turing-rpc.dwellir.com",
      OAK: "wss://rpc.turing.oak.tech",
    },
    text: "Turing Network",
    ui: {
      color: "#A8278C",
    },
  },
  {
    homepage: "https://standard.tech/",
    info: "unorthodox",
    paraId: 2094,
    providers: {
      // 'Standard Protocol': 'wss://rpc.kusama.standard.tech' // https://github.com/polkadot-js/apps/issues/8525
    },
    text: "Unorthodox",
    ui: {
      color:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(42,244,187,1) 35%, rgba(10,10,10,1) 100%)",
    },
  },
  {
    homepage: "https://xode.net",
    info: "xode",
    paraId: 3344,
    providers: {
      XodeCommunity:
        "wss://rpcnodea01.xode.net/n7yoxCmcIrCF6VziCcDmYTwL8R03a/rpc",
    },
    text: "Xode",
    ui: {
      color: "#ed1f7a",
    },
  },
  {
    homepage: "https://yerba.network",
    info: "yerba",
    paraId: 3345,
    providers: {},
    text: "Yerba Network",
    ui: {
      color: "#a5503c",
    },
  },
  {
    homepage: "https://zero.io",
    info: "zero",
    paraId: 2236,
    providers: {
      // 'Zero Network': 'wss://rpc-1.kusama.node.zero.io' // https://github.com/polkadot-js/apps/issues/10803
      GameDAO: "wss://rpc-1.gamedao.net",
    },
    text: "ZERO Canary",
    ui: {
      color: "#000000",
    },
  },
]

export const paseo: Array<ParachainConfig> = [
  {
    homepage: "https://ajuna.io/",
    info: "Ajuna(paseo)",
    paraId: 2051,
    providers: {
      BajunNetwork: "wss://rpc-paseo.ajuna.network",
    },
    text: "Ajuna Network (Paseo)",
    ui: {
      color: "#161212",
    },
  },
  {
    homepage: "",
    info: "paseoAmplitude",
    paraId: 2124,
    providers: {
      PendulumChain: "wss://rpc-foucoco.pendulumchain.tech",
    },
    text: "Amplitude testnet (Foucoco)",
    ui: {
      color: "#5DEFA7",
    },
  },
  {
    homepage: "https://www.aventus.io/",
    info: "paseoAventus",
    paraId: 2056,
    providers: {
      Aventus: "wss://public-rpc.testnet.aventus.network",
    },
    text: "Aventus",
    ui: {
      color: "#E6E6FA",
    },
  },
  {
    homepage: "https://ajuna.io/",
    info: "Bajun(paseo)",
    paraId: 2119,
    providers: {
      BajunNetwork: "wss://rpc-paseo.bajun.network",
    },
    text: "Bajun Network (Paseo)",
    ui: {
      color: "#161212",
    },
  },
  {
    homepage: "https://bifrost.finance",
    info: "Bifrost(Paseo)",
    paraId: 2030,
    providers: {
      Liebi: "wss://bifrost-rpc.paseo.liebi.com/ws",
    },
    text: "Bifrost",
    ui: {
      color: "#5a25f0",
    },
  },
  {
    homepage: "https://darwinia.network/",
    info: "Darwinia Koi",
    paraId: 2105,
    providers: {
      Darwinia: "wss://koi-rpc.darwinia.network",
    },
    text: "Darwinia Koi",
    ui: {
      color: "#FF0083",
    },
  },
  {
    homepage: "https://www.frequency.xyz",
    info: "Frequency",
    paraId: 4000,
    providers: {
      "Amplica Labs": "wss://0.rpc.testnet.amplica.io",
    },
    text: "Frequency",
    ui: {
      color: "#19455E",
    },
  },
  {
    homepage: "https://hydration.net",
    info: "rococoHydraDX",
    paraId: 2034,
    providers: {
      // 'Galactic Council': 'wss://paseo-rpc.play.hydration.cloud' https://github.com/polkadot-js/apps/issues/10997
    },
    text: "Hydration (Paseo)",
    ui: {
      color: "#b3d7fa",
    },
  },
  {
    homepage: "https://hyperbridge.network",
    info: "Hyperbridge",
    paraId: 4009,
    providers: {
      BlockOps: "wss://hyperbridge-paseo-rpc.blockops.network",
    },
    text: "Hyperbridge (Gargantua)",
    ui: {
      color: "#ED6FF1",
    },
  },
  {
    homepage: "https://idealabs.network/",
    info: "Ideal Network",
    paraId: 4502,
    providers: {
      // 'IDN Node': 'wss://idn0-testnet.idealabs.network' https://github.com/polkadot-js/apps/issues/10966
    },
    text: "Ideal Network",
    ui: {
      color: "rgb(17, 35, 77)",
    },
  },
  {
    homepage: "https://integritee.network",
    info: "integritee",
    paraId: 2039,
    providers: {
      Integritee: "wss://paseo.api.integritee.network",
    },
    text: "Integritee Network (Paseo)",
    ui: {
      color: "#658ea9",
    },
  },
  {
    homepage: "",
    info: "kilt",
    paraId: 2086,
    providers: {
      BOTLabs: "wss://peregrine.kilt.io/parachain-public-ws/",
    },
    text: "KILT Peregrine",
    ui: {
      color: "linear-gradient(45deg, #f05a27 0%, #8c145a 100%)",
    },
  },
  {
    homepage: "https://laosnetwork.io/",
    info: "laos-sigma",
    paraId: 4006,
    providers: {
      "freeverse.io": "wss://rpc.laossigma.laosfoundation.io",
    },
    text: "Laos Sigma",
    ui: {
      color: "#363435",
    },
  },
  {
    homepage: "",
    info: "muse",
    paraId: 3369,
    providers: {
      Parity: "wss://paseo-muse-rpc.polkadot.io",
    },
    text: "Muse network",
    ui: {
      color: "#110ff9",
    },
  },
  {
    homepage: "https://myriad.social",
    info: "Myriad Social",
    paraId: 4005,
    providers: {
      myriadPaseo: "wss://ws-rpc.paseo.myriad.social",
    },
    text: "Myriad Social Testnet",
    ui: {
      color: "#d5e3e4",
    },
  },
  {
    homepage: "https://mandalachain.io",
    info: "Niskala",
    paraId: 4022,
    providers: {
      "Baliola 1": "wss://mlg1.mandalachain.io",
      "Baliola 2": "wss://mlg2.mandalachain.io",
    },
    text: "Niskala",
    ui: {
      color: "#0036ac",
    },
  },
  {
    homepage: "https://www.nodle.com/",
    info: "NodleParadis",
    paraId: 2026,
    providers: {
      OnFinality:
        "wss://node-6957502816543653888.lh.onfinality.io/ws?apikey=09b04494-3139-4b57-a5d1-e1c4c18748ce",
    },
    text: "Nodle",
    ui: {
      color: "#1ab394",
    },
  },
  {
    homepage: "",
    info: "paseoEwx",
    paraId: 3345,
    providers: {
      "Energy Web": "wss://public-rpc.testnet.energywebx.com/",
    },
    text: "PEX",
    ui: {
      color: "#452E66",
    },
  },
  {
    homepage: "https://popnetwork.xyz/",
    info: "Pop Network",
    paraId: 4001,
    providers: {
      "R0GUE-RPC1": "wss://rpc1.paseo.popnetwork.xyz",
      "R0GUE-RPC2": "wss://rpc2.paseo.popnetwork.xyz",
      "R0GUE-RPC3": "wss://rpc3.paseo.popnetwork.xyz",
    },
    text: "Pop Network",
    ui: {
      color: "linear-gradient(to right, rgb(230, 0, 122), rgb(83, 15, 160))",
    },
  },
  {
    homepage: "",
    info: "regionxCocos",
    paraId: 4509,
    providers: {
      RegionX: "wss://regionx-paseo.regionx.tech",
    },
    text: "RegionX(Paseo)",
    ui: {
      color: "#0CC184",
    },
  },
  {
    homepage: "https://xcavate.io/",
    info: "Xcavate",
    paraId: 4003,
    providers: {
      Xcavate: "wss://rpc-paseo.xcavate.io:443",
    },
    text: "Xcavate",
    ui: {
      color: "#FF0083",
    },
  },
  {
    homepage: "zeitgeist.pm",
    info: "ZeitgeistBatteryStation",
    paraId: 2101,
    providers: {
      Zeitgeist: "wss://bsr.zeitgeist.pm",
    },
    text: "Zeitgeist Battery Station",
    ui: {
      color:
        "linear-gradient(180deg, rgba(32,90,172,1) 0%, rgba(26,72,138,1) 50%, rgba(13,36,69,1) 100%)",
    },
  },
]
