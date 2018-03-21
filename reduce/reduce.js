const arr = Array.from({length: 100}, (v, k) => k + 1)

const sum = arr.reduce((p, c, i, array) => p + c)

console.log(sum)
