const fs = require('fs');
const bip39 = require('bip39');

const validFile = './seeds/valid.txt';
const valid = fs.readFileSync(validFile, 'utf8').split('\n');

const wordlist = bip39.wordlists.english
const words = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", ""]
const updatedWordlist = wordlist.filter(w => !words.includes(w))

console.log('generating seeds ...');
let mnemonics = [];

for (let i = 0; i < updatedWordlist.length; i++) {
    words[11] = updatedWordlist[i];
    mnemonics.push(words.join(" "))
}

console.log('seeds generated ... checking validity');

for (const mnemonic of mnemonics) {
    const isValid = bip39.validateMnemonic(mnemonic);
    const isIncludedValid = valid.includes(mnemonic);
    if (!isValid) continue;
    if (isIncludedValid) continue;

    console.log(`Valid seed: ${seed}`);
    fs.appendFileSync(validFile, `${seed}\n`);
}
