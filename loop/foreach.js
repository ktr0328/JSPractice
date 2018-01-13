const path = require('path');
const fs = require('fs');

const data_path = path.join("../", "mock_data.json");

const data = JSON.parse(fs.readFileSync(data_path, 'utf-8'));

Object.keys(data).forEach((e, i, arr) => {
    console.log(`${i}: ${e}  @${arr}`);
});

// この作り方黒魔術臭すごい
let arr = Array.from(new Array(100).keys(), e => {
    return e + 1; // 1スタート
});

/**
 * 面白い作り方
 * ...で可変長, イテラブルなものとして扱うため。
 */
arr = [...new Array(100).keys()];

arr.filter((e, i, a) => {
    return e >= 50;
}).forEach((e, i, a) => {
    console.log(`at ${i + 1} : ${e}`);
});
