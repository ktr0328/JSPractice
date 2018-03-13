const fs = require('fs');

// const src = fs.createReadStream('../package-lock.json', 'utf-8');
// src.pipe(process.stdout);

// process.stdin.on('data', chunk => {
//     process.stdout.write(chunk);
// });

const readable = fs.createReadStream('./hoge.txt');
readable.on('readable', () => {
    let chunk;
    while (null !== (chunk = readable.read(256))) {
        console.log(`Received ${chunk.length} bytes of data.`);
    }
});
