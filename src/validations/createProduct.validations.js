const { body } = require("express-validator");
const moment = require("moment");
const { extname } = require("path")

const createProduct = [
    body("title")
        .notEmpty().withMessage("El campo título no puede estar vacío").bail()
        .isLength({ min: 4 }).withMessage("El campo título debe tener al menos 4 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo título no puede tener más de 100 caracteres"),
    body("author")
        .notEmpty().withMessage("El campo autor no puede estar vacío").bail()
        .isLength({ min: 2 }).withMessage("El campo autor debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo autor no puede tener más de 100 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo autor solo puede contener letras").bail(),
    body("editorial")
        .notEmpty().withMessage("El campo editorial no puede estar vacío").bail()
        .isLength({ min: 2 }).withMessage("El campo editorial debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo editorial no puede tener más de 100 caracteres").bail(),
    body("price")
        .notEmpty().withMessage("El campo precio no puede estar vacío").bail()
        .isNumeric().withMessage("El campo precio debe ser un número")
        .isFloat({ min: 1, max: 99999 }).withMessage("El campo precio debe ser mayor a 1 y menor de 100000"),
    body("collection")
        .notEmpty().withMessage("El campo colección no puede estar vacío").bail()
        .isLength({ min: 2 }).withMessage("El campo colección debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo colección no puede tener más de 100 caracteres"),
    body("numberPages")
        .notEmpty().withMessage("El campo número de páginas no puede estar vacío").bail()
        .isNumeric().withMessage("El campo número de páginas debe ser un número")
        .isFloat({ min: 1, max: 2000 }).withMessage("El número de páginas debe estar entre 1 y 2000"),
    body("language")
        .notEmpty().withMessage("El campo idioma no puede estar vacío").bail()
        .isLength({ min: 2 }).withMessage("El campo idioma debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo idioma no puede tener más de 100 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo autor solo puede contener letras").bail(),
    body("format")
        .notEmpty().withMessage("El campo formato no puede estar vacío").bail()
        .isLength({ min: 2 }).withMessage("El campo formato debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo formato no puede tener más de 100 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo autor solo puede contener letras").bail(),
    body("isbn")
        .notEmpty().withMessage("El campo ISBN no puede estar vacío").bail()
        .isNumeric().withMessage("El campo ISBN debe ser un número").bail()
        .isLength({ min: 13 }).withMessage("El campo ISBN debe tener 13 dígitos").bail()
        .isLength({ max: 13 }).withMessage("El campo ISBN debe tener 13 dígitos").bail(),
    body("weight")
        .notEmpty().withMessage("El campo peso no puede estar vacío").bail()
        .isNumeric().withMessage("El campo peso debe ser un número").bail()
        .custom(value => {
            if (value <= 60) {
                throw new Error("El peso debe ser mayor a 60 gramos")
            }

            if (value >= 4000) {
                throw new Error("El peso debe ser menor a 4000 gramos")
            }

            return true
        }),
    body("edition")
        .notEmpty().withMessage("El campo edición no puede estar vacío").bail()
        .isNumeric().withMessage("El campo edición debe ser un número")
        .isFloat({ min: 1800, max: 2030 }).withMessage("El campo edición debe estar entre los años 1800 y 2030"),
    body("image").custom((value, { req }) => {
        const imagen = req.files

        if (!imagen || imagen.length == 0) {
            throw new Error("La imagen no puede quedar vacía");
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

module.exports = createProduct