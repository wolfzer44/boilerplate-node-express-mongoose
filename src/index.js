import express from 'express'; 
const app = express();
import dotenv from 'dotenv';
import requireDir from 'require-dir';

import router  from './routes';

dotenv.config();

requireDir('./config');
requireDir('./models');

app.use(router);
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server running on: ${process.env.PORT}`);
})