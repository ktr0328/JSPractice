const func1 = () => new Promise(resolve => setTimeout(() => resolve(console.log("func1")), 3000));
const func2 = () => new Promise(resolve => setTimeout(() => resolve(console.log("func2")), 2000));
const func3 = () => new Promise(resolve => setTimeout(() => resolve(console.log("func3")), 1000));
const warikomi = () => new Promise(resolve => setTimeout(() => resolve(console.log("わりこみ")), 2000));

// thread.sleep的な使い方が可能
(async () => {
    console.log("< await >");
    await func1();
    await func2();
    await warikomi();
    await func3();
})().then(() => {
    console.log("-".repeat(20));
    console.log("< awaitなし >");
    func1();
    func2();
    warikomi();
    func3();
});
