import joi from "joi"

export const serviceValidation = joi.object().keys({
    serviceName: joi.string().required().trim(),
    description: joi.string().required().trim(),
    duration: joi.number().required(),
    price: joi.number().required(),
})