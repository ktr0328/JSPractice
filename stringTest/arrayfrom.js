console.log(Array.from('hogehogehoge'))

Array.from({ length: 20 }, (v, k) => k + 1)
  .forEach(e => console.log(e))
