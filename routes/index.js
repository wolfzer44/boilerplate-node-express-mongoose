const routes = require('express').Router();


routes.get('/api', (req, res) => {
    res.json({
        router: '/api',
        method: 'GET'
    })
});

routes.get('/go', (req, res) => {
    res.json({
        router: '/go',
        method: 'GET'
    })
});



module.exports = routes;