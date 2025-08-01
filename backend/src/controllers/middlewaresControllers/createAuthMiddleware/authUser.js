
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authUser = async (req, res, { user, databasePassword, password, UserPasswordModel }) => {
    const isMatch = await bcrypt.compare(databasePassword.salt + password, databasePassword.password);
    if (!isMatch) {
        return res.status(403).json({
            success: false,
            result: null,
            message: "Invalid credentials.",
        });
    }

    if (isMatch === true) {
        // sign a token
        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: req.body.remember ? 365 * 24 * 'h' : '24h' }
        );

        await UserPasswordModel.findOneAndUpdate(
            {user: user._id},
            {$push: {loggedSessions: token}},
            {new: true},
        ).exec();

        return res.status(200).json({
            success: true, 
            result: {
                _id: user._id,
                name: user.name,
                surname: user.surname,
                role: user.role,
                email: user.email,
                photo: user.photo,
                token: token,
                maxAge: req.body.remember ? 365 : null,
            },
            message: "Successfully login user",
        });

    } else {
        return res.status(403).json({
            success: false,
            result: null,
            message: "Invalid credentials.",
        });
    }
};

module.exports = authUser;