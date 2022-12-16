const insertDashes = (str) => {
    return str.split(' ').map((el) => {
        return el.split('').join('-')
    }).join(' ')
}