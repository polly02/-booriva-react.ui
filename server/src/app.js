const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const products = require('./controller/products.controller')
const basket = require('./controller/basket.controller')


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

app.use('/products', products)
app.use('/basket', basket)

app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

module.exports = app