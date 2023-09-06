const fs = require('fs');
const wrong = fs.readFileSync('./seeds/wrong.txt', 'utf8').split('\n');
const invalid = fs.readFileSync('./seeds/invalid.txt', 'utf8').split('\n');
const valid = fs.readFileSync('./seeds/valid.txt', 'utf8').split('\n');

const bip39 = require('bip39');
const wordlist = bip39.wordlists.english
const words = {
  0: ["hold", "arrow", "keep", "one", "two", "three", "wait", "hold", "profit", "safe", "seed", "you", "place", "question"],
  1: "elder",
  2: "blast",
  3: "monkey",
  4: "horse",
  5: "state",
  6: "argue",
  7: "",
  8: "water",
  9: "present",
  10: ["just", "timber", "lake"],
  11: "select",
}
const wordsArray = Object.values(words);
const updatedWordlist = wordlist.filter(w => !wordsArray.flatMap(w => w).includes(w))
const passphrase = "";


console.log('generating seeds ...');
let seeds;
for(let k of wordsArray){
  // seeds = words[0].flatMap((d) => words[1].map((v) => d + ' ' + v));
  
}

const mnemonic = Object.values(words).join(" ")

console.log('seeds generated ... checking validity');

for (const seed of seeds) {
  const isValid = em.validateMnemonic(seed, segwit);
  if (isValid) {
    if (
      wrong.includes(seed) ||
      invalid.includes(seed) ||
      valid.includes(seed)
    ) {
      console.log(`Seed: ${seed}`);
      console.log(
        `skipping wrong/invalid or already logged seed ... ${seed}`
      );
      continue;
    }
    console.log(`Valid seed: ${seed}`);
    fs.appendFileSync('./valid-seeds.txt', seed + '\n');
  } else {
    fs.appendFileSync('./invalid-seeds2.txt', seed + '\n');
  }
}
