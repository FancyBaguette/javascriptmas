const validTime = (str) => {
    const time = str.split(':')
    const [hours, minutes] = time
    return parseInt(hours) > 24 ? false :
    parseInt(minutes) > 59 ? false : true
}