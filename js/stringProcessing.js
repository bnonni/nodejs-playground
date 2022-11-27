
// let finalName = ''
// let storeName = storeURL.split('.')[0].split('-').filter((e) => {
//     e = e[0].toUpperCase() + e.substring(1) + ' '
//     return e
// })
// console.log(storeName)

let storeName = storeURL.split('.')[0].replace(/-/g, ' ').toLowerCase().replace(/^\w|\s\w/g, (l) => { return letter.toUpperCase()})
console.log(storeName)