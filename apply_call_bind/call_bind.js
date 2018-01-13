class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

class Human extends Animal {
    greet() {
        console.log(`I'm ${this.name}. Hello!`);
    }
}

class Cat extends Animal {
    mew() {
        console.log(`meeeeeeeeew(${this.name})`);
    }
}

const taro = new Human("Taro");
const tama = new Cat("Tama");

taro.greet(); // I'm Taro. Hello!
// tama.greet() // error

taro.greet.call(tama); // I'm Tama. Hello! : 喋る猫
tama.mew.call(taro); // Taro鳴く

/**
 * callは関数を実行するのに対し、
 * bindは新たな関数を生成して返す
 */

// taro.mew(); // error
Object.assign(taro, {mew: tama.mew.bind(taro)}); // Taroは鳴くことを習得する
// taro.mew = tama.mew.bind(taro); // 上と同じ
taro.mew(); // Taro鳴く
