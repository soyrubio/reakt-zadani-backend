const express = require('express')
const db = require('../db/db')
const schemas = require('../db/schemas')

var router = express.Router()


router.get('/', (req, res) => {
    const { models } = db.read()
    res.send(models)
})


router.post('/', (req, res) => {
    const { body } = req

    const { error } = schemas.model.validate(body);
    const valid = error == null

    if (!valid) {
        res.status(400).send({
            message: 'Invalid message body '
        })
    }

    model = body
    model.id = db.getNewModelId() // to avoid duplicate ids

    const data = db.read()
    data.models.push(model)

    db.write(data) // concurrency issues in case multiple backend instances running

    res.send({ message: 'Model added', model: model })
})


router.put('/:id', (req, res) => {
    const id = req.params.id
    const { body } = req

    if (id == null) {
        res.status(400).send({ message: 'Model id is required' })
    }

    const data = db.read()
    const models = data.models
    const model = models.find(p => p.id === parseInt(req.params.id))
    if (!model) {
        res.status(404).send({ message: 'No model found' })
    }

    if (body.name) model.name = body.name;
    if (body.checked) model.checked = body.checked;

    db.write(data) // concurrency issues in case multiple backend instances running

    res.send({ message: 'Model updated', model })
})


router.delete('/:id', (req, res) => {
    const id = req.params.id
    if (id == null) {
        return res.status(400).send({ message: 'Model id is required' })
    }

    const data = db.read()

    const model = data.models.find(p => p.id === parseInt(id))
    if (!model) {
        return res.status(404).send({ message: 'No model found' })
    }

    const index = data.models.indexOf(model)
    data.models.splice(index, 1)
    db.write(data) // concurrency issues in case multiple backend instances running

    res.send({ message: 'Model deleted', model })
})

module.exports = router