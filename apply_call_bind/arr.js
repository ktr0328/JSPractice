// Stringを配列へ
const arr = [].map.call("hoge", (e) => e);
console.log(arr); // [ 'h', 'o', 'g', 'e' ]

// index付きで取れるとは知らなんだ
const regex = RegExp("ba", 'g');
const result = [];
result.push(regex.exec("baaaaaaaabaababaaaba"));

for (i = 1; i = regex.exec("baaaaaaaabaababaaaba"); i) result.push(i.index);

console.log(result); // [ 'aaaa', index: 1, input: 'baaaa' ]
