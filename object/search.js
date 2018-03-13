class Hoge {
    constructor (name) {
        this.name = name;
    }

    hoge () {
        console.log(this.name)
    }
}

const hoge = new Hoge('hoge');
console.log('toString' in hoge);

