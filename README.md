# Compliant RPCs

Keeping track of which RPC endpoints are exposing modern versions of the [Polkadot JSON-RPC spec](https://paritytech.github.io/json-rpc-interface-spec/)

## Legend of icons meanings:

- ✅: The node is on a version that is either compliant with the JSON-RPC spec, or PAPI is able to make it compliant with its middlewares.
- 👴: The node is using a version of the PolkadotSDK node which is so old that PAPI can't translate it to the stable spec of the JSON-RPC API.
- ☠️: The node doesn't expose the new JSON-RPC spec.
- ⏰: The node has stated that it supports the new JSON-RPC methods, but it's actually ignoring the requests to these methods.
- ⛔: There was a connectivity issue while trying to stablish the connection with the node. Therefore, we can't know whether this node is compliant or not.

## Results
- [Polkadot](./results/polkadot.txt)
- [Kusama](./results/kusama.txt)
- [Paseo](./results/paseo.txt)
