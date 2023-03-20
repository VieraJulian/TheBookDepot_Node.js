const { body } = require("express-validator");
const moment = require('moment');

const register = [
    body("firstName")
        .notEmpty().withMessage("El campo nombre no puede estar vacío").bail().isLength({ min: 2 }).withMessage("El campo nombre debe tener al menos 2 caracteres").bail()
        .isLength({ max: 50 }).withMessage("El campo nombre no puede tener más de 50 caracteres").bail().matches(/^[\p{L}\p{M}*]+$/u)
        .withMessage('El campo nombre solo puede contener letras').bail(),
    body("lastName")
        .notEmpty().withMessage("El campo apellido no puede estar vacío").bail().isLength({ min: 2 }).withMessage("El campo apellido debe tener al menos 2 caracteres").bail()
        .isLength({ max: 50 }).withMessage("El campo apellido no puede tener más de 50 caracteres").bail().matches(/^[\p{L}\p{M}*]+$/u)
        .withMessage('El campo apellido solo puede contener letras y letras con acentos').bail(),
    body("birthDate")
        .notEmpty().withMessage("El campo fecha de nacimiento no puede estar vacío").bail()
        .custom((value) => {
            const fecha = moment(value, 'YYYY-MM-DD', true);
            if (!fecha.isValid()) {
                throw new Error('El campo fecha de nacimiento debe tener un formato válido (Año-mes-dia)');
            }
            if (fecha.isAfter(moment())) {
                throw new Error('El campo fecha de nacimiento no puede ser mayor al día actual');
            }
            if (fecha.isBefore(moment().subtract(100, 'years'))) {
                throw new Error('El campo fecha de nacimiento no puede ser mayor a 100 años atrás');
            }
            return true;
        }),
    body("phone").optional({ checkFalsy: true })
        .matches(/^(\+54)?[ -]*(\d[ -]*){10}$/).withMessage('El campo celular debe tener un formato de número telefónico válido de Argentina (+541111111111 o 1111111111)')
]

module.exports = register