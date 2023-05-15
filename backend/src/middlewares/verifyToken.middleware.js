const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        });
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SHARED_SECRET, function (err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
        }

        next()
    })
}

module.exports = { verifyToken }