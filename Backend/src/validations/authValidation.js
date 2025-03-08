import joi from "joi"

export const signUpValidation = joi.object().keys({
    name: joi.string().required().trim(),
    username: joi.string().required().trim(),
    email: joi.string().required().trim(),
    password: joi.string().required().trim().min(8),
    role: joi.string().valid("mentor", "student").required()
})

export const signInValidation = joi.object().keys({
    email: joi.string().required().trim(),
    password: joi.string().required().trim().min(8)
}) 