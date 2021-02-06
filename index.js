require('dotenv').config();


const { ApiPromise, WsProvider } = require('@polkadot/api')
const { Keyring } = require('@polkadot/keyring')
const plasmDefinitions = require('@plasm/types/interfaces/definitions');
//const plasmDefinitions = require('./myplasm-types/src/interfaces/definitions');
const jsonDefinitions = require('./types.js')
const fs = require('fs')
const BN = require('bn.js')

startChain()

async function startChain() {
  console.log("trying connection to ", process.env.RPC_URL)
  const targetAddress = process.env.TARGET_ADDRESS
  const provider = new WsProvider(process.env.RPC_URL)
  /*const types = Object.values(plasmDefinitions).reduce(
      (res, { types }) => ({ ...res, ...types }),
      {},
  )*/

  /*fs.appendFile('generated-types.js', JSON.stringify(types), 'utf-8', (err) => {
    if (err) throw err;
    console.log('The "types" were appended to file!');
  });*/

  /*const api = new ApiPromise({
      provider,
      types
  });*/
  const api = await ApiPromise.create({
	  provider: provider,
	  types: jsonDefinitions
  });

  api.on('connected', () => console.log(`Connected to ${process.env.RPC_URL}`));
  api.on('disconnected', () => console.log(`Disconnected from ${process.env.RPC_URL}`));
  await api.isReady;
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ])

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion} - ${process.env.RPC_URL}`)

  const keyring = new Keyring({ type: 'sr25519' })
  const fromPair = keyring.addFromUri(process.env.PLASM_MNEMONIC)
  const fromAmountUnits = new BN('1000000000000000')
  const transfer = api.tx.balances.transfer(targetAddress, fromAmountUnits)      
  // send value
  //const nonce = await api.query.system.accountNonce(process.env.FROM_ADDRESS)
  const nonce = await api.rpc.system.accountNextIndex(process.env.FROM_ADDRESS)
  console.log("got nonce", nonce)
  const txHash = await transfer.signAndSend(fromPair, {nonce})

}