const { getBasketDB, getBasketByIdDB, createBasketDB, deleteBasketDB} = require('../repository/basket.repository')

async function getBasket() {
    return await getBasketDB()
}

async function getBasketById(product_id) {
    return await getBasketByIdDB(product_id)
}

async function createBasket(product_id) {
    const products = await createBasketDB(product_id)
    return products
}
async function deleteBasket(product_id) {
    const products = await deleteBasketDB(product_id)
    return products
}

module.exports = {  getBasket, getBasketById, createBasket, deleteBasket }