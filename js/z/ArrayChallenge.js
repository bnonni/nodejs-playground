/**
 * 
 * @param {*} arr 
 * @returns sum or four largest number in array formatted based on the ints in the sum being in the challengeToken
 * 
 * Have the function ArrayChallenge(arr) take the array of integers stored in arr, and find the four largest elements and return their sum. For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four largest elements in this array are 6, 6, 4, and 5 and the total sum of these numbers is 21, so your program should return 21. If there are less than four numbers in the array your program should return the sum of all the numbers in the array.
 */
const challengeToken = '327xyrndea'
function ArrayChallenge(arr) {
  if (arr.length <= 4) return format(sum(arr))
  const fourLargest = [];
  while (fourLargest.length < 4) {
    fourLargest.push(arr.splice(arr.indexOf(Math.max.apply(Math, arr)), 1)[0])
  }
  return format(sum(fourLargest))
}

const sum = (arr) => arr.reduce((p, c) => p + c)

const format = (s) => {
  const sumStrArray = Array.from(s.toString())
  const charsInToken = sumStrArray.filter(c => challengeToken.includes(c))
  if(charsInToken.length === 1) {
    const charInToken = charsInToken[0]
    const index = sumStrArray.indexOf(charInToken)
    const char = sumStrArray[index]
    sumStrArray[index] = `--${char}--`
    return sumStrArray.join('')
  }
  charsInToken.map(c => {
    const char = sumStrArray[sumStrArray.indexOf(c)]
    sumStrArray[sumStrArray.indexOf(c)] = `--${char}--`
  })
  return sumStrArray.join('')
}

// keep this function call here 
console.log(ArrayChallenge([0, 0, 2, 3, 7, 1])); // 13
console.log(ArrayChallenge([4, 5, -2, 3, 1, 2, 6, 6])); // 21
console.log(ArrayChallenge([1, 1, 1, -5])); // -2
