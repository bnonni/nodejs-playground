const electrum = require('electrum-mnemonic');

const seed = electrum.mnemonicToSeedSync('', electrum.PREFIXES.segwit)
console.log(seed)
