// function countingValleys(steps, path) {
//     if(path.length <= 1) return 0;
//     let valleys = path.match(/(D)*DDU/g) || 0;
//     if(!valleys.length) return 0
//     return valleys.length;
// }

// var r;

// r = countingValleys(10, "UDUUUDUDDD")
// console.log(r)

// r = countingValleys(100, "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD")
// console.log(r)
let steps = 8;
let path = 'UDDDUDUU';
let elevation = 0,
    valley = 0,
    previous = '',
    start = 0,
    end = 0;
for (let step in path) {
    console.log(previous);
    if (path[step] === 'D') {
        start = step
        elevation -= 1;
        if ((previous === '' || previous === 'U') && elevation < 0) valley += 1;
    } else elevation += 1;
    previous = step;
    console.log(previous);
}
console.log(elevation);
console.log(valley);
