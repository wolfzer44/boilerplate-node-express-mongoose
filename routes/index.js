const routes = require('express').Router();

routes.get('/api', (req, res) => {
    res.json({
        router: '/api',
        method: 'GET'
    })
});

module.exports = routes;