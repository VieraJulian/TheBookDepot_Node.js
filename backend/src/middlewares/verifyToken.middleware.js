const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        });
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_SHARED, function (err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
        }

        next()
    })
}

module.exports = { verifyToken }