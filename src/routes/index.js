import express from 'express';
const routes = express.Router();
import * as ctrl from '../controllers/';

const { api, go } = ctrl.default;

routes
    .get('/api', api.get)
    .post('/api', api.post);

routes
    .get('/go', go.get)
    .post('/go', go.post);    



export default routes;