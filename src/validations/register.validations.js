const { body } = require("express-validator");
const moment = require("moment");
const { User } = require("../database/models/index")
const { extname } = require("path")

const register = [
    body("firstName")
        .notEmpty().withMessage("El campo nombre no puede estar vacío").bail().isLength({ min: 2 }).withMessage("El campo nombre debe tener al menos 2 caracteres").bail()
        .isLength({ max: 50 }).withMessage("El campo nombre no puede tener más de 50 caracteres").bail().matches(/^[\p{L}\p{M}*]+$/u)
        .withMessage("El campo nombre solo puede contener letras").bail(),
    body("lastName")
        .notEmpty().withMessage("El campo apellido no puede estar vacío").bail().isLength({ min: 2 }).withMessage("El campo apellido debe tener al menos 2 caracteres").bail()
        .isLength({ max: 50 }).withMessage("El campo apellido no puede tener más de 50 caracteres").bail().matches(/^[\p{L}\p{M}*]+$/u)
        .withMessage("El campo apellido solo puede contener letras y letras con acentos").bail(),
    body("birthDate")
        .notEmpty().withMessage("El campo fecha de nacimiento no puede estar vacío").bail()
        .custom((value) => {
            const fecha = moment(value, "YYYY-MM-DD", true);
            if (!fecha.isValid()) {
                throw new Error("El campo fecha de nacimiento debe tener un formato válido (Año-mes-dia)");
            }
            if (fecha.isAfter(moment())) {
                throw new Error("El campo fecha de nacimiento no puede ser mayor al día actual");
            }
            if (fecha.isBefore(moment().subtract(100, 'years'))) {
                throw new Error("El campo fecha de nacimiento no puede ser mayor a 100 años atrás");
            }
            return true;
        }),
    body("phone").optional({ checkFalsy: true })
        .matches(/^(\+54)?[ -]*(\d[ -]*){10}$/).withMessage("El campo celular debe tener un formato de número telefónico válido de Argentina (+541111111111 o 1111111111)"),
    body("email")
        .notEmpty().withMessage("El campo email no puede quedar vacío").bail()
        .isEmail().withMessage("El formato de email no es válido").bail()
        .custom(async (value) => {
            let users = await User.findAll()
            users = users.map(u => u.email)
            if (users.includes(value)) {
                throw new Error('El email ya está registrado')
            }
            return true
        }),
    body("password").notEmpty().withMessage("El campo contraseña no puede quedar vacío").bail()
        .isLength({ min: 8 }).withMessage('El campo password debe tener al menos 8 caracteres').bail()
        .matches(/[A-Z]/).withMessage('El campo password debe contener al menos una letra mayúscula').bail()
        .matches(/[\W]/).withMessage('El campo password debe contener al menos un símbolo').bail()
        .matches(/[a-z]/).withMessage('El campo password debe contener al menos una letra minúscula').bail(),
    body("image").custom((value, { req }) => {
        let imagen = req.file

        if (!imagen || imagen.length == 0) {
            throw new Error("La imagen no puede quedar vacía")
        }

        let extensiones = [".svg", ".jpg", ".png", ".jpeg"]
        let extension = extname(imagen.originalname)
        if (!extensiones.includes(extension)) {
            throw new Error("La extension debería ser '.svg', '.jpg', '.png', '.jpeg'")
        }

        if (imagen.size > 2097152) {
            throw new Error("La imagen supera el peso de 2MB");
        }

        return true
    }),
]

module.exports = register