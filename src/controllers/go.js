export const get = (req, res) => (
    res.json({
        router: '/go',
        method: 'GET'
    })
);

export const post = (req, res) => (
    res.json({
        router: '/go',
        method: 'POST'
    })
)

