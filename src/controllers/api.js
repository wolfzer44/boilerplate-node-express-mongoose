 export const get = (req, res) => (
    res.json({
        router: '/api',
        method: 'GET'
    })
);

 export const post = (req, res) => (
    res.json({
        router: '/api',
        method: 'POST'
    })
)
