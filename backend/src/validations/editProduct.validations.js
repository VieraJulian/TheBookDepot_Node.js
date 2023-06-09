const { body } = require("express-validator");
const { extname } = require("path")

const editProduct = [
    body("title")
        .isLength({ min: 4 }).withMessage("El campo título debe tener al menos 4 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo título no puede tener más de 100 caracteres"),
    body("author")
        .isLength({ min: 2 }).withMessage("El campo autor debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo autor no puede tener más de 100 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo autor solo puede contener letras").bail(),
    body("editorial")
        .isLength({ min: 2 }).withMessage("El campo editorial debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo editorial no puede tener más de 100 caracteres").bail(),
    body("price")
        .isNumeric().withMessage("El campo precio debe ser un número")
        .isFloat({ min: 1, max: 99999 }).withMessage("El campo precio debe ser mayor a 1 y menor de 100000"),
    body("collection")
        .isLength({ min: 2 }).withMessage("El campo colección debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo colección no puede tener más de 100 caracteres"),
    body("numberPages")
        .isNumeric().withMessage("El campo número de páginas debe ser un número")
        .isFloat({ min: 1, max: 2000 }).withMessage("El número de páginas debe estar entre 1 y 2000"),
    body("language")
        .isLength({ min: 2 }).withMessage("El campo idioma debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo idioma no puede tener más de 100 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo autor solo puede contener letras").bail(),
    body("format")
        .isLength({ min: 2 }).withMessage("El campo formato debe tener al menos 2 caracteres").bail()
        .isLength({ max: 100 }).withMessage("El campo formato no puede tener más de 100 caracteres").bail()
        .matches(/^[\p{L}\p{M} ]+$/u)
        .withMessage("El campo autor solo puede contener letras").bail(),
    body("isbn")
        .isNumeric().withMessage("El campo ISBN debe ser un número").bail()
        .isLength({ min: 13 }).withMessage("El campo ISBN debe tener 13 dígitos").bail()
        .isLength({ max: 13 }).withMessage("El campo ISBN debe tener 13 dígitos").bail(),
    body("weight")
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
        .isNumeric().withMessage("El campo edición debe ser un número")
        .isFloat({ min: 1800, max: 2030 }).withMessage("El campo edición debe estar entre los años 1800 y 2030"),
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

module.exports = editProduct