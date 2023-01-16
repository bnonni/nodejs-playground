const electrum = require('electrum-mnemonic');

const seed = electrum.mnemonicToSeedSync('supreme sauce web buffalo gravity bamboo peanut broccoli magic cube ripple coyote', electrum.PREFIXES.segwit)
console.log(seed)
