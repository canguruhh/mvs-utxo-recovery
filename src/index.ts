import { HDWallet } from 'metaverse-ts'

const MNEMONIC_WORDS = 'butter vacuum breeze glow virtual mutual veteran argue want pipe elite blast judge write sand toilet file joy exotic reflect truck topic receive wait'

const wallet = HDWallet.fromMnemonic(MNEMONIC_WORDS)

const addresses = []
for(let i=0;i<10;i++){
	addresses.push(wallet.getAddress("m/44'/2302'/0'/0/"+i))
}
console.log({addresses})

