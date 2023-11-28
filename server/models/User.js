const { Schema } = require('mongoose'),

const userSchema = new Schema ({
    ID: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = userSchema;