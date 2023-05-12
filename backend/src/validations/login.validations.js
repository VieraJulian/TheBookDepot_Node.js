const { body } = require("express-validator");
const { User } = require("../database/models/index")
const { compareSync } = require("bcryptjs")

const login = [
    body("email")
    .notEmpty().withMessage("El campo email no puede quedar vacío").bail()
    .isEmail().withMessage("El formato de email no es válido").bail().custom(async (value) => {
        let users = await User.findAll()
        users = users.map(user => user.email)
        if (!users.includes(value)) {
            throw new Error("El email no está registrado")
        }

        return true
    }),
    body("password")
    .notEmpty().withMessage("El campo contraseña no puede quedar vacío").bail()
    .custom(async (value, { req }) => {
        const { email } = req.body
        const users = await User.findAll()
        const user = await users.find(user => user.email === email)

        if (!user) {
            throw new Error("Usuario no encontrado")
        }

        if (!compareSync(value, user.password)) {
            throw new Error("La contraseña es incorrecta")
        }

        return true
    })
]

module.exports = login