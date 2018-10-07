const get = (req, res) => {
    res.json({
        router: '/api',
        method: 'GET'
    })
};

const post = (req, res) => {
    res.json({
        router: '/api',
        method: 'POST'
    })
}

module.exports = {
    get: get,
    post: post
}