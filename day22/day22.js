const getReadyTables = () => {
    const readyTables = []
    for (let i = 0; i < 2; i++) {
        readyTables.push(Math.round(Math.random()*20) + 1)
    }
    return readyTables
}

const displayTables = () => {
    getReadyTables().map((table) => {
        document.querySelector('#tables').innerHTML += `<div class="table">${table}</div>`
    })
}

displayTables()