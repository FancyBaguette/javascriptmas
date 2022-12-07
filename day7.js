const altCaps = (str) => {
    let newStr = ''
    
    for (let i = 0; i < str.length; i++) {
        newStr += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));