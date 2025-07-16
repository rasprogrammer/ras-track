const Joi = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const register = async (req, res, { userModel }) => {

    const UserModel = mongoose.model(userModel);
    const UserPasswordModel = mongoose.model(userModel + 'Password');
    const { name, email, password, country } = req.body;

    const objectSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required(),
        country: Joi.string().required()
    });

    const { error } = objectSchema.validate({
        name,
        email,
        password,
        country
    });

    if (error) {
        return res.status(400).json({
            success: false,
            result: null,
            error: error,
            message: 'Invalid input fields',
            errorMessage: error.message
        });
    }

    // check email already exist or not 
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
        return res.status(409).json({
            success: false,
            result: null,
            error: null,
            message: 'Email already exist',
        });
    }

    const session = await mongoose.startSession();

    try {
        await session.startTransaction();

        const newUser = await UserModel.create([{
            name: name,
            email: email,
            country: country,
            removed: false,
            enabled: true,
        }], { session });

        const salt = await bcrypt.genSalt(10);
        const userPasswordInstance = new UserPasswordModel();
        const hashedPassword = userPasswordInstance.generateHash(salt, password);

        const newUserPassword = await UserPasswordModel.create([{
            user: newUser[0]._id,
            password: hashedPassword,
            salt: salt
        }], { session });

        await session.commitTransaction();
        session.endSession();


        return res.status(201).json({
            success: true,
            result: {
                id: newUser[0]._id,
                name: newUser[0].name,
                email: newUser[0].email,
                country: newUser[0].country,
            },
            message: 'User created successfully',
            error: null,
            errorMessage: null,
        });
    } catch (error) {
        session.abortTransaction();
        session.endSession();

        return res.status(500).json({
            success: false,
            result: null,
            message: 'user creatation failed',
            erorr: error,
            errorMessage: error.message,
        });
    }

};

module.exports = register;