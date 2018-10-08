import mongoose from 'mongoose';

const Products = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true }
});

mongoose.model('Products', Products);