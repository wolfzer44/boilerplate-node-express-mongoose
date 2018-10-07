const app = require('express')(); 
const dotenv = require('dotenv');

dotenv.config();


app.listen(process.env.PORT, () => {
    console.log(`Server running on: ${process.env.PORT}`);
})