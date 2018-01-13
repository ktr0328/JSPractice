// Hit And Blow
const {Set} = require('immutable');
const reader = require('readline').createInterface({input: process.stdin, output: process.stdout});
const config = {
    num: parseInt(process.argv[2])||4
};

console.log("Hit and Blow!");
console.log(`input ${config.num} numbers...`);

const answer = (() => {
    const makeRandom = () => Math.floor(Math.random() * 9) + 1;
    let set = Set();
    while (set.count() !== config.num) {
        set = set.add(makeRandom().toString());
    }

    return set.sortBy(Math.random).toArray();
})();

const countHitAndBlow = (input, answer) => {
    const inputArray = input.split("");
    const hit = (() => {
        let hit = 0;
        answer.forEach((e, i) => {
            if (answer[i] === inputArray[i]) hit++;
        });
        return hit;
    })();

    const blow = (() => {
        let blow = 0;
        answer.forEach((e, i) => {
            if (answer.includes(inputArray[i])) blow++;
        });
        return blow;
    })() - hit;

    return {hit: hit, blow: blow};
};

reader.on('line', (input) => {
    const ans = countHitAndBlow(input, answer);
    console.log(`hit : ${ans.hit}\nblow: ${ans.blow}`);

    if (ans.hit === config.num) {
        console.log("Clear!");
        process.exit(1);
    }
});
