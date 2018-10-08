import mongoose from 'mongoose';

mongoose.connect(`mongodb://mongo:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, { 
    useNewUrlParser: true 
});


export default mongoose;