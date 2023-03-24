const { body } = require("express-validator");
const moment = require("moment");
const { extname } = require("path")

const editProfile = [
    body("firstName")
        .isLength({ min: 2 }).withMessage("El campo nombre debe tener al menos 2 caracteres").bail()
        .isLength({ max: 50 }).withMessage("El campo nombre no puede tener más de 50 caracteres").bail()
        .matches(/^[\p{L}\p{M}*]+$/u)
        .withMessage("El campo nombre solo puede contener letras").bail(),
    body("lastName")
        .isLength({ min: 2 }).withMessage("El campo apellido debe tener al menos 2 caracteres").bail()
        .isLength({ max: 50 }).withMessage("El campo apellido no puede tener más de 50 caracteres").bail()
        .matches(/^[\p{L}\p{M}*]+$/u)
        .withMessage("El campo apellido solo puede contener letras").bail(),
    body("birthDate")
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
    body("image").custom((value, { req }) => {
        const imagen = req.files

        if (!imagen || imagen.length == 0) {
            return true
        }

        const extensiones = [".svg", ".jpg", ".png", ".jpeg"]
        const extension = extname(imagen[0].originalname)
        if (!extensiones.includes(extension)) {
            throw new Error("La extension debería ser '.svg', '.jpg', '.png', '.jpeg'")
        }

        if (imagen[0].size > 2097152) {
            throw new Error("La imagen supera el peso de 2MB");
        }

        if (req.files && req.files.length > 1) {
            throw new Error("Solo puedes subir una imagen");
        }

        return true
    })
]

module.exports = editProfile