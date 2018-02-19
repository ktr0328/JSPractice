const score = {
    japanese: 60,
    math: 90,
    english: 100,
    hoge: {

    }
};

Object.keys(score).forEach(scoreName => {
    console.log(`${scoreName}: ${score[scoreName]}`)
});

console.log('-'.repeat(50));

for (let name in score) {
    console.log(`${name}: ${score[name]}`);
}
