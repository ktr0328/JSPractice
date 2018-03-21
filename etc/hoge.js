const obj = {
  hoge: 'hoge',
  hage: 'hage'
}

/**
 * @param {any} obj
 * @param {number} times
 * @return {object} array
 */
const makeObjArr = (obj, times) => {
  let index = 0
  return Array.from({ length: times }, () => obj)
    .map((v, k) => {
      index++
      return Object.keys(obj).map(k => {
        const value = `${obj[k]}${index}`
        return {[k]: value}
      })
    })
}

makeObjArr(obj, 5)
  .forEach(e => console.log(e))
