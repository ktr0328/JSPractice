const record = require('node-record-lpcm16');
const fs = require('fs');

const file = fs.createWriteStream('./hoge.wav');

record.start({
    verbose : true
}).pipe(file);
