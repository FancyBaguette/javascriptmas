const faveFoods = {
    breakfast: 'Oatmeal 🥣',
    lunch: 'Chicken 🐔',
    supper: 'Pizza 🍕'
}

const { breakfast, lunch, supper } = faveFoods;

document.querySelector("#meals").innerHTML = `
    <p>
        For breakfast, I often eat ${breakfast}. For lunch,
        i love ${lunch}, and for supper I usually want ${supper}
    </p>
`