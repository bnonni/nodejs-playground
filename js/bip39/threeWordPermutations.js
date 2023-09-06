
const fs = require('fs');
const bip39 = require('bip39');
const wordlist = bip39.wordlists.english
const words = {
  0: "horse", // mempool
  1: "select", // wasabi wallet
  2: "elder", // blockstream
  3: "", // swan
  4: "", // btctkvr
  5: "present", // hodl hodl
  6: "", // trezor
  7: "hollow", // coinkite
  8: "blast", // cryptosteel
  9: "state", // btcpay
  10: "monkey", // bull bitcoin
  11: "argue", // bitcoinreserve
}
const updatedWordlist = wordlist.filter(w => !Object.values(words).includes(w))
const wordlistSlices = {
  0: updatedWordlist.slice(0, 500), // 0 - 499
  1: updatedWordlist.slice(500, 1000), // 500 - 999
  2: updatedWordlist.slice(1000, 1500), // 1000 - 1499
  3: updatedWordlist.slice(1500, updatedWordlist.length), // 1500 - 2039
}
console.time('permuteSlots')
let options = [];
const permuteSlots = (array, length) => {
  return array.flatMap((v, i) => length > 1
    ? permuteSlots(array.slice(i + 1), length - 1).map(w => [v, ...w])
    : [[v]]
  );
}

for (let slice of Object.values(wordlistSlices)) options.push(permuteSlots(slice, 3))
console.log(options)
console.timeEnd('permuteSlots')
options.map(o => o.map(p => fs.appendFileSync('./seeds/missing.txt', p + '\n')))