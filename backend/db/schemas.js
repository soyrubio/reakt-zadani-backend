const Joi = require('joi')

const product = Joi.object().keys({
    id: Joi.number().integer(), // not sure whether to include this
    src: Joi.string(),
    srcset: Joi.string(),
    name: Joi.string(),
    price: Joi.number().integer(), // possibly change to float
    description: Joi.string(),
    modelId: Joi.number().integer()
})

const model = Joi.object().keys({
    id: Joi.number().integer(), // not sure whether to include this
    name: Joi.string(),
    checked: Joi.boolean()
})

module.exports = {
    product,
    model
}
