const dinnerFoods = ['🍝','🍔','🌮']

document.querySelector("#menu").innerHTML = dinnerFoods.map((item) => {
    return `<div class="food">${item}</div>`
}).join('')