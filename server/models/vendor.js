const { Schema } = require('mongoose');

const vendorSchema = new Schema ({
    ID: {
        type: Number,
        required: true,
    },

});

module.exports = vendorSchema;