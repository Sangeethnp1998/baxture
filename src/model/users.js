const Joi = require('joi');

const userSchema = Joi.object({
    username : Joi.string().required(),
    age: Joi.number().required(),
    hobbies: Joi.array().required()
})

function validateBody(req,res,next){
    const { error }  = userSchema.validate(req.body);
    if(error){
        res.status(400).send({
            message: 'Invalid request',
            error: error.details[0].message 
        })
    }
    else{
        next()
    }
}

module.exports = {
    validateBody
}
