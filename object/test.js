const foo = new String('foo');
console.log(foo); // [String: 'foo']

const hoge = {
    name: 'hoge',
    hoge: this // こいつなに？
};

console.log(hoge);
