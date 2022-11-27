const fs = require('fs')

const valids = fs.readFileSync('./valid-seeds.txt', 'utf8').split('\n');

let i = 1;
for (const seed of valids) {
  fs.appendFileSync('./numbered.txt', i + '. ' + seed + '\n')
  i += 1
}