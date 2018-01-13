const fs = require('fs');

const data = JSON.parse(fs.readFileSync("./test.json"));
// console.log(data);
Object.keys(data).forEach(e => {
    // console.log(`${e} : ${data[e]}`);
    Object.keys(e).forEach(e2 => {
        console.log(e2);
    })
});
