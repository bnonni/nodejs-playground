const fs = require('fs');
const wrong = fs.readFileSync('./seeds/wrong.txt', 'utf8').split('\n');
// const invalid = fs.readFileSync('./seeds/invalid-seeds2.txt', 'utf8').split('\n');
const valid = fs.readFileSync('./seeds/valid.txt', 'utf8').split('\n');

const em = require('electrum-mnemonic');
const segwit = em.PREFIXES.segwit;

const words = {
    0: ['blast'],
    1: ['hollow'],
    2: ['state'],
    3: ['monkey'],
    4: ['select'], // 
    5: [''],
    6: [''],
    7: [''],
    8: [''],
    9: [''],
    10: [''],
    11: [''],
};

console.log('running word combos ...');

let seeds = words[0].flatMap((d) => words[1].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[2].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[3].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[4].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[5].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[6].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[7].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[8].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[9].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[10].map((v) => d + ' ' + v));
    seeds = seeds.flatMap((d) => words[11].map((v) => d + ' ' + v));
console.log(seeds)
return
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
