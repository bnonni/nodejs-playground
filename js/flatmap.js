var array1=["A","B","C"];

var array2=["1","2","3","4"];

console.log(array1.flatMap(d => array2.map(v => d + v)))
