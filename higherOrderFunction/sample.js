const output = (base, func) => {
    console.log(func(base))
}

const func = num => num * num
output(5, func) // 25

output(2, num => num * 3) // 6
output("hoge ", hoge => hoge.repeat(5)) // hoge hoge hoge hoge hoge
