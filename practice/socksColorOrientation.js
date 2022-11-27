// You're building the brain of a sock pairing robot. 
// It needs to know which socks to pair with which others.
//                          /`-.
//                /`-.     /   /
//               /   /    /   /
//              /   /    /  _/
//             /  _/    /  / |
//            /  / |  .'   \_/
//          .'   \_/.'   .-'
//        .'   .-' /_  .'
//       /_  .'    \_\/
//       \_\/

// A sock has an orientation (left or right) and a color.
// Given a list of socks, we want to produce a list of pairs of left and right socks of the same color.

// Example Socks
// 1. left, black
// 2. left, pink
// 3. right, pink
// 4. right, black
// 5. right, black

// The correct set of pairings:
// 0, 3 or 0, 4
// 1, 2

/**
 * Input:
 *  [[left, black], [left, pink], [right, pink], [right, black]]
 * Output:
 *  [[0, 3], [1, 2]]
 */
var socks = [
    ['left', 'black'],
    ['left', 'pink'],
    ['right', 'pink'],
    ['left', 'black'],
    ['right', 'black']
    
]

var pairsSeen = {}

let pairs = []
for(let i = 0; i < socks.length; i++) {
    let orientation = socks[i][0];
    let color = socks[i][1];
    for(let j = i + 1; j < socks.length; j++){
        if(color === socks[j][1]){
            if(orientation !== socks[j][0]){
                if(pairsSeen[i] === undefined && pairsSeen[j] === undefined)
                    pairs.push([i, j])
                    pairsSeen[i] = j;
                    pairsSeen[j] = i;
            }
        }
    }
}

console.log(pairs)