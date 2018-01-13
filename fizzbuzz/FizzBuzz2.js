[...Array(20).keys()].map(e => e + 1)
    .map(e => (e % 3 ? "" : "Fizz") + (e % 5 ? "" : "Buzz") || e)
    .forEach(e => console.log(e));
