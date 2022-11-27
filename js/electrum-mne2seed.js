const electrum = require('electrum-mnemonic');

const seed = electrum.mnemonicToSeedSync('supreme sauce cheese joke bamboo bread broccoli magic film under deliver', electrum.PREFIXES.segwit)
console.log(seed)
