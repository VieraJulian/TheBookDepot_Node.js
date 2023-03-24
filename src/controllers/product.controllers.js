const { Product, ProductImage } = require("../database/models/index")
const { validationResult } = require("express-validator")

const handleValidationErrors = (validations) => {
    const errors = validations.array();
    if (errors && errors.length > 0) {
        const formattedErrors = errors.map((err) => ({
            param: err.param,
            value: err.value,
            msg: err.msg,
        }));
        return formattedErrors;
    }
    return null;
};

module.exports = {
    createProduct: async (req, res) => {
        try {
            const validations = validationResult(req);
            const errors = handleValidationErrors(validations);

            if (errors) {
                return res.status(200).json(errors);
            }

            const productCreate = await Product.create({
                title: req.body.title,
                author: req.body.author,
                editorial: req.body.editorial,
                price: req.body.price,
                collection: req.body.collection,
                numberPages: req.body.numberPages,
                language: req.body.language,
                format: req.body.format,
                isbn: req.body.isbn,
                weight: req.body.weight,
                edition: req.body.edition,
                bestSellers: false
            })

            const imagenBuffer = req.files[0].buffer
            const base64Image = imagenBuffer.toString("base64");

            await ProductImage.create({
                productId: productCreate.id,
                image: base64Image
            })

            return res.status(200).json("Product created")
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}