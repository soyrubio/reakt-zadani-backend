const express = require('express')
const db = require('../db/db')
const schemas = require('../db/schemas')

var router = express.Router()


router.get('/', (req, res) => {
    const { products } = db.read()
    const filter = req.query.filter

    if (filter === undefined || filter.length === 0) {
        res.send(products)
    } else {
        const filteredProducts = products.filter(p => filter.includes(p.modelId))
        res.send(filteredProducts)
    }
})


router.post('/', (req, res) => {
    const { body } = req

    const { error } = schemas.product.validate(body);
    const valid = error == null

    if (!valid) {
        res.status(400).send({
            message: 'Invalid message body'
        })
    }

    product = body
    product.id = db.getNewProductId() // to avoid duplicate ids

    const data = db.read()
    data.products.push(product)

    db.write(data) // concurrency issues in case multiple backend instances running

    res.send({ message: 'Product added', product: product })
})


router.put('/:id', (req, res) => {
    const id = req.params.id
    const { body } = req

    if (id == null) {
        res.status(400).send({ message: 'Product id is required' })
    }

    const data = db.read()
    const products = data.products
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (!product) {
        res.status(404).send({ message: 'No product found' })
    }

    if (body.src) product.src = body.src;
    if (body.srcset) product.srcset = body.srcset;
    if (body.name) product.name = body.name;
    if (body.price) product.price = body.price;
    if (body.description) product.description = body.description;
    if (body.modelId) product.modelId = body.modelId;

    db.write(data) // concurrency issues in case multiple backend instances running

    res.send({ message: 'Product updated', product })
})


router.delete('/:id', (req, res) => {
    const id = req.params.id
    if (id == null) {
        return res.status(400).send({ message: 'Product id is required' })
    }

    const data = db.read()

    const product = data.products.find(p => p.id === parseInt(id))
    if (!product) {
        return res.status(404).send({ message: 'No product found' })
    }

    const index = data.products.indexOf(product)
    data.products.splice(index, 1)

    db.write(data) // concurrency issues in case multiple backend instances running

    res.send({ message: 'Product deleted', product })
})

module.exports = router