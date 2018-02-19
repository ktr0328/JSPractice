const Hoge = function () {
    this.name = 'hoge';
    this.toString = function () {
        return this.name
    };
    return this;
};
const hoge = new Hoge();
hoge.a = 'hogeA';

// Object.keys(hoge).forEach(e => console.log(e));
console.log(hoge.toString());
