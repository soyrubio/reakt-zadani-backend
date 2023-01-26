const express = require('express')
const cors = require('cors')
const config = require('./server-config.json')

const productsRouter = require('./routes/products')
const modelsRouter = require('./routes/models')

const app = express()

// To resolve CORS issue, allow requests from localhost:3000
app.use(cors({ origin: `http://localhost:${config.port_nuxtjs}` }));
app.use(express.json())

app.use("/products", productsRouter)
app.use("/models", modelsRouter)

module.exports = app