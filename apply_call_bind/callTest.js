const hoge = {
    0: 'a',
    1: 'b',
    length: 2
};

[].forEach.call(hoge, (e) => console.log(e));
