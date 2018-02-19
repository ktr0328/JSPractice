const {Seq, Range} = require('immutable');

const arr = Range(1, 30 + 1)
    .groupBy(e => {
        let result = '';
        if (e % 3 === 0) result += "Fizz";
        if (e % 5 === 0) result += "Buzz";
        if (!result) result = 'num';

        return result;
    }).toJS();

console.log(arr);
