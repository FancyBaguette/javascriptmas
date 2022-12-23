const sortProducts = (data) => {
    return data.sort((a,b) => {
        return a.price - b.price
    }).map((item) => `${item.product}, ${item.price}`)
}

const listByCheapest = sortProducts(products);
console.log(listByCheapest);
