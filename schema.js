const Joi = require('joi');

let listingValidationSchema=Joi.object({
    listing:Joi.object({
        image:Joi.string().allow("",null),
        name:Joi.string().required(),
        year:Joi.number().required(),
        genre:Joi.string().required(),
        cast:Joi.string().required(),
        director:Joi.string().required(),
    }).required(),
});

let reviewValidationSchema=Joi.object({
    review:Joi.object({
        rating : Joi.number().required().min(1).max(5),
        comment : Joi.string().required(),        
    }).required(),
})

module.exports={listingValidationSchema,reviewValidationSchema};