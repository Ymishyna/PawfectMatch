const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin1:L0vecraft@Cluster64865.kvtdb8z.mongodb.net/PawfectMatch?retryWrites=true&w=majority');

module.exports = mongoose.connection;

