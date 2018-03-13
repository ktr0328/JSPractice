const net = require('net');
const PORT = 8000;
const HOST = '127.0.0.1';
const CRLF = "\r\n";

const createBody = (option) => option.data ? `${CRLF.repeat(2)}${option.data}` : "";

const createHeader = (option) => {
    const header = { "Content-Type": "plain/text", "Accept": "*/*", "data": "", ...option };
    if (option.data.length > 0) Object.assign(header, { "Content-Length": option.data.length });

    return Object.keys(header)
            .filter(e => e !== "data")
            .map(e => `${e} : ${header[e]}`).join(CRLF)
        + createBody(option)
};

const client = new net.Socket();
client.setEncoding('utf-8');
process.stdin.setEncoding("utf-8");

client.connect(PORT, HOST, () => console.log(`connect to server => ${HOST}:${PORT}`));
client.pipe(process.stdout);

process.stdin.on('data', chunk => {
    const header = createHeader({
        data: chunk ? chunk.trim() : ""
    });
    client.write(header);
});
