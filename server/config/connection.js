// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin1:L0vecraft@Cluster64865.kvtdb8z.mongodb.net/PawfectMatch?retryWrites=true&w=majority');

//mongodb+srv://yanamishina92:<password>@cluster0.1l3qfmp.mongodb.net/PawfectDB?retryWrites=true&w=majority


// module.exports = mongoose.connection;

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yanamishina92:Password@cluster0.1l3qfmp.mongodb.net/PawfectDB?retryWrites=true&w=majority');

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/PawfectDB');

module.exports = mongoose.connection;


