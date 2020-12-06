const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
            new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            role: Joi.number().integer(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            address: Joi.string(),
            birthday: Joi.date().max('now'),
            phone: Joi.string().regex(
            new RegExp('^[0-9? ()-]{10,14}$')),
            subscribe: Joi.boolean()
        })
        const {error, value} = schema.validate(req.body)
        if (error) {
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules:
                        <br>
                        1. It must contain only the following charachters: lower case, upper case, and numbers
                        <br>
                        2. It must be at least 8 characters in length and not greater than 32 characters`
                    })
                case 'birthday':
                    res.status(400).send({
                        error: 'Date cannot be later than tomorrow'
                    })
                case 'phone':
                    res.status(400).send({
                        error: 'Phone number should be ten digit'
                    })
        break
        default:
        res.status(400).send({
            error: 'Invalid registration'
        })
        }
        }else{
            // run the next line (authentication controller)
            next()
        }    
    },
    login (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
            new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        if (error) {
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules:
                        <br>
                        1. It must contain only the following charachters: lower case, upper case, and numbers
                        <br>
                        2. It must be at least 8 characters in length and not greater than 32 characters`
                    })
        break
        default:
        res.status(400).send({
            error: 'Invalid Login'
        })
        }
        }else{
            // run the next line (authentication controller)
            next()
        }    
    }
}