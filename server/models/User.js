const { Schema, model } = require('mongoose');
const petSchema = require('./Pet');
const bcrypt = require('bcrypt');

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
      isVendor: {
        type: Boolean,
        required: true
      },
      // pets: [Pet]
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },  
      
});

userSchema.virtual('petCount').get(function() {
  return this.pets.length;
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;