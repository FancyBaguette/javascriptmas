const whisper = string => {
    return string.endsWith('!') ? 
    "shh... " + string.toLowerCase().slice(0, -1) : 
    "shh... " + string.toLowerCase()
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
console.log(whisper("The KITTENS are SLEEPING!"))