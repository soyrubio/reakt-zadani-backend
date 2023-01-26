const fs = require('fs')

const read = () => {
    const data = fs.readFileSync('./db/data.json')
    return JSON.parse(data)
}

const write = (data) => {
    fs.writeFileSync('./db/data.json', JSON.stringify(data))
}

// simple helper function to avoid duplicate ids
// just for demo purposes
const getNewProductId = () => {
    const data = read()
    const products = data.products
    const maxId = Math.max(...products.map(p => p.id))
    return maxId + 1
}

// simple helper function to avoid duplicate ids
// just for demo purposes
const getNewModelId = () => {
    const data = read()
    const products = data.models
    const maxId = Math.max(...products.map(p => p.id))
    return maxId + 1
}

module.exports = {
    read,
    write,
    getNewProductId,
    getNewModelId
}