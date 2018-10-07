const app = require('express')(); 
const dotenv = require('dotenv');
const requireDir = require('require-dir');

dotenv.config();
const config = requireDir('./config');

app.get('/', (req, res)=> {
    res.json({
        message: `Server running on ${process.env.PORT}`
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on: ${process.env.PORT}`);
})