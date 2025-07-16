const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    removed: {
        type: Boolean,
        default: false,
    },
    enabled: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
    },
    photo: {
        type: String, 
        trim: true,
    },
    country: String,
    created: {
        type: Date,
        default: Date.now(),
    },
    role: {
        type: String,
        default: 'owner',
        enum: ['owner'],
    }
});

module.exports = mongoose.model("Admin", adminSchema);