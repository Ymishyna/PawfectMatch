const { Schema } = require('mongoose');

const petSchema = new Schema ({
   ID: {
    type: Number,
    required: true,
   },
   Species: {
    type: String,
   },
   Breed: {
    type: String,
   },
   Color: {
    type: String,
   },
   Age: {
    type: Number,
   },
   spayedOrNeutered: {
    type: Boolean,
   },
   Housetrained: {
    type: Boolean,
   },
   Location: {
    type: Number,
   }
});

module.exports = petSchema;