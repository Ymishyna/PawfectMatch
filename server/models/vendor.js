const { Schema, model } = require('mongoose');
const petSchema = require("./Pet");

const vendorSchema = new Schema ({
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
      location: {
        type: Number,
        required: true
      },
      pets: [petSchema],
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },  
})

vendorSchema.virtual('petCount').get(function () {
  return this.pets.length;
});

const Vendor = model('Vendor', vendorSchema);

module.exports = Vendor;