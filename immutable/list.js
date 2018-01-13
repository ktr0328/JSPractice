const I = require('immutable');
const {List, Collection, Iterable, Map, OrderedMap, OrderedSet, Range, Seq} = require('immutable');

const result = Range(1, 21)
    .map(e => e % 15 ? e % 3 ? e % 5 ? e : "Buzz" : "Fizz" : "FizzBuzz");

// console.log(I.fromJS({a: "a", b: {c: "c"}}));
result.forEach(e => console.log(e));
