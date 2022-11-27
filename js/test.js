function solution(a) {
    var b = []
    a.map((_, i) => {
        let prev = a[i - 1] || 0;
        let next = a[i + 1] || 0;
        b[i] = prev + a[i] + next
    })
    return b

}

console.log(solution([4, 0, 1, -2, 3]))
/**
    
*/