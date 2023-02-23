const { getBasketDB, getBasketByIdDB, createBasketDB, deleteBasketDB} = require('../repository/basket.repository')

async function getBasket() {
    const products = await getBasketDB()
    if (!products.length) throw new Error('products DB is empty')
    return products
}

async function getBasketById(product_id) {
    const products = await getBasketByIdDB(product_id)
    if (!products.length) throw new Error('products DB is empty')
    return products
}

async function createBasket(product_id) {
    const products = await createBasketDB(product_id)
    if (!products.length) throw new Error('products DB is empty')
    return products
}
async function deleteBasket(product_id) {
    const products = await deleteBasketDB(product_id)
    if (!products.length) throw new Error('products DB is empty')
    return products
}

module.exports = {  getBasket, getBasketById, createBasket, deleteBasket }