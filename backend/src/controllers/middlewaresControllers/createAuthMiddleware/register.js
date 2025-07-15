const Joi = require("joi");
const mongoose = require("mongoose");

const register = async (req, res, { userModel }) => {

    // const UserModel = mongoose.model(userModel);
    // const UserPasswordModel = mongoose.model(userModel + 'Password');
    const { name, email, password, country } = req.body;

    const objectSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({ tlds: true }).required(),
        password: Joi.string().required(),
        country: Joi.string().required()
    });

    const { error, value } = objectSchema.validate({
        name,
        email,
        password,
        country
    });

    if (error) {
        return res.status(409).json({
            success: false,
            result: null,
            error: error,
            message: 'Invalid input fields',
            errorMessage: error.message
        });
    }

    const user = await UserModel.findOne({ email: email });
    console.log(user);


    res.end("result");
};

module.exports = register;