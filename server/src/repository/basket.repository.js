const { pool } = require('../DB')

async function getBasketDB() {
    const client = await pool.connect();
    const sql = 'SELECT basket.id, product.title, product.price FROM basket JOIN product ON product.id=basket.product_id';
    const data = (await client.query(sql)).rows;
    return data;
}

async function getBasketByIdDB(product_id) {
    const client = await pool.connect();
    const sql = 'SELECT basket.id, product.title, product.price FROM basket JOIN product ON product.id=basket.product_id WHERE basket.id=$1';
    const data = (await client.query(sql, [product_id])).rows;
    return data;
}

async function createBasketDB(product_id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO basket (product_id) VALUES ($1) RETURNING *`;
        const data = (await client.query(sql, [product_id])).rows;
        await client.query('COMMIT');
        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        return [];
    }
}

async function deleteBasketDB(product_id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `DELETE FROM basket WHERE product_id=$1 RETURNING *`;
    const data = (await client.query(sql, [product_id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(error);
    return [];
  }
}

module.exports = { getBasketDB, getBasketByIdDB, createBasketDB, deleteBasketDB }