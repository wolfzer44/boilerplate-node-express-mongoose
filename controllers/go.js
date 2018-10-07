const get = (req, res) => {
    res.json({
        router: '/go',
        method: 'GET'
    })
};

const post = (req, res) => {
    res.json({
        router: '/go',
        method: 'POST'
    })
}

module.exports = {
    get: get,
    post: post
}