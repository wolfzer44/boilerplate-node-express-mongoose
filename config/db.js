const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, { 
    useNewUrlParser: true 
});


module.exports = mongoose;