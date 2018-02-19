const Hoge = require('./Hoge');

const hoge = new Hoge('hoge');
console.log(hoge.name);

Object.assign(hoge, {greet: () => `Hello! I'm ${hoge.name}!`});
console.log(hoge.greet());
