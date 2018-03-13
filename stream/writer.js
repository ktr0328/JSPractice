const fs = require('fs');
const writable = fs.createWriteStream('./writer.txt');

process.stdin.on('data', chunk => {
    writable.write(chunk);
});
