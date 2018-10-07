const routes = require('express').Router();
const ctrl = require('../controllers');

routes
    .get('/api', ctrl.api.get)
    .post('/api', ctrl.api.post);

routes
    .get('/go', ctrl.go.get)
    .post('/go', ctrl.go.post);    



module.exports = routes;