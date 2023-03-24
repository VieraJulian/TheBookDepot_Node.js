const { body } = require("express-validator");

const createAddress = [
    body("addresse")
        .notEmpty().withMessage("El campo destinatario no puede estar vacío").bail()
        .isLength({ min: 2 }).withMessage("El campo destinatario debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo destinatario no puede tener más de 100 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo nombre solo puede contener letras").bail(),
    body("province")
        .notEmpty().withMessage("El campo provincia no puede estar vacío").bail()
        .isLength({ min: 4 }).withMessage("El campo provincia debe tener al menos 4 caracteres").bail()
        .isLength({ max: 30 }).withMessage("El campo provincia no puede tener más de 30 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo provincia solo puede contener letras").bail(),
    body("city")
        .notEmpty().withMessage("El campo ciudad no puede estar vacío").bail()
        .isLength({ min: 4 }).withMessage("El campo ciudad debe tener al menos 4 caracteres").bail()
        .isLength({ max: 30 }).withMessage("El campo ciudad no puede tener más de 30 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo ciudad solo puede contener letras").bail(),
    body("address")
        .notEmpty().withMessage("El campo dirección no puede estar vacío").bail()
        .isLength({ min: 4 }).withMessage("El campo dirección debe tener al menos 4 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo dirección no puede tener más de 100 caracteres").bail()
        .matches(/^[\p{L}\p{M}0-9 ]+$/u)
        .withMessage("El campo ciudad solo puede contener letras y números").bail(),
    body("phone").optional({ checkFalsy: true })
        .matches(/^(\+54)?[ -]*(\d[ -]*){10}$/).withMessage("El campo celular debe tener un formato de número telefónico válido de Argentina (+541111111111 o 1111111111)"),
]

module.exports = createAddress