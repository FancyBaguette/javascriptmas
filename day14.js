const countVowelConsonant = (str) => {
    let sum = 0  
    const vowels = ['a','e','i','o','u']
    str.split('').map((letter) => vowels.includes(letter) ? sum += 1 : sum += 2)
    return sum
}