const s1 = "郵便番号は〒123-4567です。"
const reg1 = /〒(\d{3})-(\d{4})/

console.log(s1.match(reg1))

const s2 = '0987098789431724'

const reg2 = /(\d{4})\1/g

let result = ''
while (result = reg2.exec(s2)) {
    console.log(result)
}

console.log(s2.match(reg2))
