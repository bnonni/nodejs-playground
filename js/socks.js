// // Given a list of socks, write a function to sort the socks based on colour and orientation (i.e. left or right pair).
//  // n: number of socks
//     // ar: list of colors
//     // return: number of pairs
//     let n = 3
//     let ar = [10, 20, 30]
//     /**
//      * { '10':  }
//      */
//     if(n <= 1) return 0
//     let pairs = {}
//     for(let i in ar){
//         if(!pairs[ar[i]]) pairs[ar[i]] = 0
//         pairs[ar[i]] += 1
//     }

//     let socks = Object.values(pairs)
//     return socks.map((sock) => Math.floor(sock/2))
//                 .filter(pair => pair != 0)
//                 .reduce((a, b) => a + b, 0)

function sockMerchant(n, ar) {
    if(n <= 1) return 0
    let pairs = {} 
    ar.map(e => pairs[e] = 0)
    ar.filter(e => pairs[e] += 1)
    
    let socks = Object.values(pairs)

    return socks.map(sock => Math.floor(sock / 2))
                .filter(pair => pair != 0)
                .reduce((a, b) => a + b, 0)
}

n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(sockMerchant(n, ar))