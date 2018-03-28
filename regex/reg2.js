const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, './text.txt')
const txt = fs.readFileSync(filePath, 'utf-8')

const separate = () => console.log()

// NTT
const regex1 = /ＮＴＴ.{10}/g
const results = txt.match(regex1)
results.forEach((e, i) => console.log(`${i}: ${e}..`))
separate()

// ルーター
const searchWord = 'ルーター'
const regex2 = new RegExp(`${searchWord}.{5}`, 'g')
console.log(`${searchWord}: ${txt.match(regex2).length} hit!`)
console.log(txt.match(regex2))
separate()

// 数字
const regex3 = /[\d０-９]+[ー日月年件時・]?.{4}/g
console.log(txt.match(regex3))
separate()

// 電話番号
const regex4 = /([\d０-９]{2,}[ー・-])?[\d０-９]{2,}[ー・-][\d０-９]{2,}/g
console.log(txt.match(regex4))
separate()

// 英字
const regex5 = /[Ａ-Ｚa-z]+/gi
console.log(txt.match(regex5))
separate()

// （） 最短マッチ
const regex6 = /（.*?）/g
console.log(txt.match(regex6))
separate()
console.log(txt.match(regex6).map(e => e.replace(/[（）]/g, '')))
