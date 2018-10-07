const app = require('express')(); 
const dotenv = require('dotenv');
const requireDir = require('require-dir');

const router = require('./routes');

dotenv.config();

requireDir('./config');

app.use(router);
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server running on: ${process.env.PORT}`);
})