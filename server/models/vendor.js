const { Schema } = require('mongoose');
const Pet = require("./Pet");

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        required: true,
      },
      pets: [Pet.Schema]
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },  
})

const User = model('User', userSchema);

module.exports = User;