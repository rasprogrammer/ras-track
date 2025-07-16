const mongoose = require('mongoose');
const Joi = require('joi');

const authUser = require('./authUser');

const login = async (req, res, { userModel }) => {
    const UserModel = mongoose.model(userModel);
    const UserPasswordModel = mongoose.model(`${userModel}Password`);
    const { email, password } = req.body;

    const validateSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error } = validateSchema.validate({
        email, password
    });

    if (error) {
        return res.status(409).json({
            success: false, 
            result: null,
            error: error,
            message: "Invalid/Missing credentials",
            errorMessage: error.message
        });
    }

    const user = await UserModel.findOne({email: email, removed: false});
    if (!user) {
        return res.status(404).json({
            success: false,
            result: null,
            message: "No account with this email has been registered.",
        })
    }

    const databasePassword = await UserPasswordModel.findOne({user: user._id, removed: false});
    if (!user.enabled) { 
        return res.status(409).json({
            success: false,
            result: null,
            message: "Your account is disabled, contact your account adminstrator."
        })
    }

    authUser(req, res, {
        user,
        databasePassword,
        password,
        UserPasswordModel,
    });

};

module.exports = login;