const express = require('express')
const fs = require('fs')
var cors = require('cors')
const app = express()

// To resolve CORS issue, allow requests from localhost:8888
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(3001, () => {
    console.log('Server started on http://localhost:3001')
})

/* Helper functions */

const readData = () => {
    const data = fs.readFileSync('data.json')
    return JSON.parse(data)
}

const writeData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data))
}

/* Products API */

// Get all products
app.get('/products', (req, res) => {
    const products = readData().products
    const filter = req.query.filter
    console.log("filter", filter, req.query)
    if (!filter) {

        res.send(products)
    } else {
        const filteredProducts = products.filter(p => filter.includes(p.modelId))
        res.send(filteredProducts)
    }
})

// Add a new product
// with simple validation
app.post('/products', (req, res) => {
    if (!req.body.name || !req.body.modelId || !req.body.price) {
        return res.status(400).send({ message: 'Product name, modelId and price are required' })
    }
    const data = readData()
    const newProduct = req.body
    data.products.push(newProduct)
    writeData(data)
    res.send({ message: 'Product added', product: newProduct })
})

// Update a product
app.put('/products/:id', (req, res) => {
    const data = readData()
    const product = data.products.find(p => p.modelId === parseInt(req.params.id))
    if (!product) {
        return res.status(404).send({ message: 'No product found' })
    }
    // check if all required fields are present
    if (!req.body.name || !req.body.modelId || !req.body.price) {
        return res.status(400).send({ message: 'Product name, modelId and price are required' })
    }
    // in real-world app, conditional put update would be better to avoid
    // concurrent update issues
    product = req.body
    writeData(data)
    res.send({ message: 'Product updated', product })
})

// Delete a product
app.delete('/products/:id', (req, res) => {
    const data = readData()
    const product = data.products.find(p => p.modelId === parseInt(req.params.id))
    if (!product) {
        return res.status(404).send({ message: 'No product found' })
    }
    const index = data.products.indexOf(product)
    data.products.splice(index, 1)
    // again, in real-world app, checking whether data was changed
    // (i.e. another product what deleted/updated in the meantime)
    // would be better to avoid concurrency issues
    writeData(data)
    res.send({ message: 'Product deleted', product })
})

/* ModelFilter API */

// Get all modelFilters
app.get('/modelFilters', (req, res) => {
    const data = readData()
    res.send(data.watchModels)
})

// Add a new modelFilter
app.post('/modelFilters', (req, res) => {
    if (!req.body.name || !req.body.checked || !req.body.id) {
        return res.status(400).send({ message: 'ModelFilter name, checked and id are required' })
    }
    const data = readData()
    const newModelFilter = req.body
    data.modelFilters.push(newModelFilter)
    // concurrency issue here as well
    writeData(data)
    res.send({ message: 'ModelFilter added', modelFilter: newModelFilter })
})

