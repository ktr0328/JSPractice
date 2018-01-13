// アロー関数わかりやすい
// function わかりづらい
const test = (hoge) => {
    this.name = hoge;
    console.log(this.name);
};

const obj = {name: "obj"};
test(obj.name);
