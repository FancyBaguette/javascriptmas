const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

const reverseString = (string) => string.split('').reverse().join('')

const reverseStringsInArray = (arr) => arr.map((string) => {
    return reverseString(string)
})

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
