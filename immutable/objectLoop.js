const {Seq, Map, Range} = require('immutable');

const hoge = {
    one: [1],
    two: [2, 2],
    three: [3, 3, 3],
    four: [4, 4, 4, 4],
    five: [5, 5, 5, 5, 5]
};

Seq(hoge)
    .reverse()
    .map(val => val.map(e => e ** 2)) // べき乗
    .filter(val => val.some(e => e > 4)) // value配列の中身が4以上
    .map(val => val.map(e => e ** 2)) // べき乗
    .forEach((val, key) => console.log(`${key}: ${val.join(' ')}`));

const seq = Seq({a: 'aaa', b: 'bbb'}).includes('aaa');
console.log(seq);

const sum = Range(0, 100 + 1).reduce((v1, v2) => v1 + v2);
console.log(sum);
