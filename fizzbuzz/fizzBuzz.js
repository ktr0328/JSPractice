const arr = [...new Array(20).keys()].map(e => e + 1);

const fizzBuzzHelper = (n) => {
    if (n % 15 === 0) return "FizzBuzz";
    else if (n % 3 === 0) return "Fizz";
    else if (n % 5 === 0) return "Buzz";
    else return n;
};

arr.map(fizzBuzzHelper)
    .forEach(e => console.log(e));
