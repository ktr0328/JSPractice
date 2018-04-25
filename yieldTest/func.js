function* generator() {
    let num = 0;
    while (true) {
        yield ++num * 10;
    }
}

const gen = generator()

process.stdin.on("data", data => {
    console.log(gen.next().value);
});
