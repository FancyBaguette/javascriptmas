const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

// Built-in method

const flatten = (arr) => arr.flat()

// Manually

const flattenManual = (arr) => {
    const flatArr = [];
    arr.forEach((el) => {
        typeof el === "object" ? flatArr.push(...flatten(el)) : flatArr.push(el)
    })
    return flatArr
}


// console.log(flatten(kittyPrizes));
// console.log(flatten(kittyScores));

console.log(flattenManual(kittyPrizes))
console.log(flattenManual(kittyScores))