// 入力補完用にJSDoc書いてみる

class FizzBuzz {
  /**
   * Creates an instance of FizzBuzz.
   * @param {number} num
   * @memberof FizzBuzz
   */
  constructor (num) {
    this.num = num
  }

  toString () {
    return this.fizzBuzzHelper(this.num)
  }

  /**
   * mapping FizzBuzz
   *
   * @param {number} n
   * @returns {string} result
   * @memberof FizzBuzz
  */
  fizzBuzzHelper (n) {
    let result = ''
    if (n % 3 === 0) result += 'Fizz'
    if (n % 5 === 0) result += 'Buzz'
    if (result === '') result = n.toString()

    return result
  }
}
/**
 * test func
 * @param {FizzBuzz} fb
 */
const output = (fb) => {
  console.log(fb.toString())
}

[...Array(20).keys()].map(e => e + 1)
  .forEach(e => output(new FizzBuzz(e)))
