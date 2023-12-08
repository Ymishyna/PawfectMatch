const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Cluster64865:Nyarlathotep@cluster64865.kvtdb8z.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;``

