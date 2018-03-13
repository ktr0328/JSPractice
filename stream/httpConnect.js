const http = require('http');
const URL = "http://localhost:8000?name=hoge";

http.get(URL, res => {
    res.setEncoding('utf-8');

    res.on('data', chunk => {
        console.log(chunk);
    })
});
