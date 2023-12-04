const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:Nyarlathotep@cluster0.x25i7i0.mongodb.net/');

module.exports = mongoose.connection;
