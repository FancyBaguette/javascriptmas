const getRandomNumberOfTacos = () => new Array(Math.floor(Math.random()*10)).fill('🌮')

const putTacosOnTray = () => {
    return getRandomNumberOfTacos().map((taco) => {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.querySelector('#tray').innerHTML = putTacosOnTray()