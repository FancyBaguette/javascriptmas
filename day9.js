const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1)

const toTitleCase = (str) => {
    return str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));