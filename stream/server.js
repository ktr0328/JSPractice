const os = require('os');
const net = require('net');
const CRLF = "\r\n";
const PORT = 8000;
const HOST = "HOST: hoge";

net.createServer(socket => {
    socket.on('data', chunk => {
        console.log(chunk.toString('utf-8'));
        console.log('----'.repeat(5));
        socket.write(`HTTP/1.1 200 OK${CRLF}${chunk}`)
    });
    socket.on('close', () => console.log(`${socket.remoteAddress} has disconnected`));
}).listen(PORT);

const osNetworkInterfaces = os.networkInterfaces();
const IP = osNetworkInterfaces['lo0']
    .filter(e => e.family === 'IPv4')[0].address;

console.log(`server running on ${IP}: ${PORT}`);
