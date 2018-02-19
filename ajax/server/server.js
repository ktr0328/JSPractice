const http = require('http');
const PORT = 8000;

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end('success')
}).listen(PORT);

console.log(`server running port: ${PORT}`);
