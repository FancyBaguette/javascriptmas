const getSaleItems = data => {
    const candyArray = data.filter((product) => {
        return product.type === "sweet"
    });
    const shoppingCart = candyArray.map((candy) => {
        return {
            item: candy.item,
            price: candy.price
        }
    })
    return shoppingCart
};

console.log(getSaleItems(products))