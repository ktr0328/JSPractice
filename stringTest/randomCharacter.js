const generateRandomChar = () => {
    const aIndex = "a".charCodeAt(0);
    return String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
};

const randomLetter = Array.from({length: 50}).map(e => e + 1)
    .map(generateRandomChar)
    .join("");

console.log(randomLetter);

const japanese = [...Array(83).keys()].map(e => e + "あ".charCodeAt(0))
    .map(e => String.fromCharCode(e))
    .join("");
console.log(japanese);

const randomJapanese = [...Array(20).keys()].map(e => Math.floor(Math.random() * (japanese.length - 1)))
    .map(e => japanese[e])
    .join("");
console.log(randomJapanese);
