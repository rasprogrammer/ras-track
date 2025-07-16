const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const saltRound = 10;

const adminPasswordSchema = new mongoose.Schema({
    removed: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'Admin',
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
    salt: {
        type: String, 
        required: true,
    },
    emailToken: String,
    resetToken: String,
    emailVerified: {
        type: Boolean,
        default: false,
    },
    authType: {
        type: String,
        default: 'email',
    },
    loggedSessions: {
        type: [String],
        default: [],
    }

});

adminPasswordSchema.methods.generateHash = function (salt, password) {
    return bcrypt.hashSync(salt + password, saltRound);
};

adminPasswordSchema.methods.validPassword = function (salt, userPassword) {
    return bcrypt.compareSync(salt + userPassword, this.password);
};

module.exports = mongoose.model('AdminPassword', adminPasswordSchema);