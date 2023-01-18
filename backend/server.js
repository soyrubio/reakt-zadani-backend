const express = require('express')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// To resolve CORS issue, allow requests from localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json())

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
    if (filter === undefined || filter.length == 0) {
        res.send(products)
    } else {
        const filteredProducts = products.filter(p => filter.includes(p.modelId))
        res.send(filteredProducts)
    }
})

// Add a new product
app.post('/products', (req, res) => {
    console.log(req.body)
    if (req.body.name === undefined || req.body.modelId === undefined || req.body.price === undefined) {
        return res.status(400).send({ message: 'Product name, modelId and price are required' })
    }
    const data = readData()
    const newProduct = req.body
    data.products.push(newProduct)
    writeData(data)
    res.send({ message: 'Product added', product: newProduct })
})

/*
// Update a product
app.put('/products/:id', (req, res) => {
    const data = readData()
    const product = data.products.find(p => p.modelId === parseInt(req.params.id))
    if (!product) {
        return res.status(404).send({ message: 'No product found' })
    }
    // check if all required fields are present
    if (req.body.name === undefined || req.body.modelId === undefined || !req.body.price !== undefined) {
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
*/

/* WatchModel API */

// Get all WatchModel
app.get('/watchModels', (req, res) => {
    const data = readData()
    res.send(data.watchModels)
})

// Add a new WatchModel
app.post('/watchModels', (req, res) => {
    if (req.body.name === undefined || req.body.checked === undefined) {
        return res.status(400).send({ message: 'WatchModel name and checked are required' })
    }
    const data = readData()
    const newWatchModel = req.body
    // TODO: better id generation, a duplicate id could occur 
    newWatchModel.id = data.watchModels.length + 1
    data.watchModels.push(newWatchModel)
    writeData(data)
    res.send({ message: 'WatchModel added', newWatchModel: newWatchModel })
})

// Update a watchModel
app.put('/watchModels/:id', (req, res) => {
    const data = readData()
    let watchModel = data.watchModels.find(m => m.id === parseInt(req.params.id))
    if (!watchModel) {
        return res.status(404).send({ message: 'No WatchModel found' })
    }
    // Not sure whether to include a check for req.body.id here
    if (req.body.name === undefined || req.body.checked === undefined) {
        return res.status(400).send({ message: 'WatchModel name and checked are required' })
    }
    // concurrency issue here as well
    watchModel.name = req.body.name
    watchModel.checked = req.body.checked
    writeData(data)
    res.send({ message: 'WatchModel updated', watchModel })
})

// Delete a watchModel
app.delete('/watchModels/:id', (req, res) => {
    const data = readData()
    const watchModel = data.watchModels.find(m => m.id === parseInt(req.params.id))
    if (!watchModel) {
        return res.status(404).send({ message: 'No WatchModel found' })
    }
    const index = data.watchModels.indexOf(watchModel)
    data.watchModels.splice(index, 1)
    // concurrency issue here as well
    writeData(data)
    res.send({ message: 'WatchModel deleted' })
})