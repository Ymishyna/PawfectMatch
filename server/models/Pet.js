const { Schema, model } = require('mongoose');

const petSchema = new Schema ({
        petID: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            unique: false,
        },
        species: {
            type: String,
            required: true,
        },
        breed: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false
        },
        age: {
            type: Number,
            required: true
        },
        sterilized: {
            type: Boolean,
            required: false
        },
        declawed: {
            type: Boolean,
            required: false
        },
        housetrained: {
            type: Boolean,
            required: true
        },
        location: {
            type: Number,
            required: true,
        }
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },  
})

const Pet = model('Pet', petSchema);

module.exports = Pet
