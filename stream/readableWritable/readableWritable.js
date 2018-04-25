const fs = require("fs");
const path = require("path");

const readable = fs.createReadStream(path.resolve(__dirname, "./read.txt"), {
    highWaterMark: 4
});
const writable = fs.createWriteStream(path.resolve(__dirname, "./write.txt"), {
    encoding: "utf-8"
});

readable.on("data", data => {
    console.log(data);
    const write = writable.write(data);
    if (!write) {
        console.log("paused writing");
    }
});
