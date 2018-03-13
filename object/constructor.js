const hoge = function (name) {
    this.name = name
}
console.log(hoge); // [Function: hoge]
console.log(hoge.constructor); // [Function: Function]
console.log(hoge('a')); // undefined
console.log(new hoge('a')); // hoge { name: 'a' }

console.log('---'.repeat(20));

for (obj in new hoge('a')) {
    console.log(obj); // name
}

eval('console.log("aaaaaaaa")'); // aaaaaaaa
console.log(typeof null); // object

console.hoge = (str) => console.log(str.repeat(2));
console.hoge('hoge'); // hogehoge

String.prototype.hoge = function () {
    return this + 'bar';
};
console.log('foo'.hoge()); // foobar

const constructorTest = {};
console.log(constructorTest.constructor);
console.log(constructorTest.constructor('a')); // [String: 'a']
