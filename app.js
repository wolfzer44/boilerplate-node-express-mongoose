const app = require('express')(); 
const dotenv = require('dotenv');
const requireDir = require('require-dir');

dotenv.config();

const config = requireDir('./config');

const routes = require('./routes/');

console.log(routes);

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on: ${process.env.PORT}`);
})