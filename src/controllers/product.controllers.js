const { Product, ProductImage, User, FavoriteProduct, SavedProduct } = require("../database/models/index")
const { validationResult } = require("express-validator");

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
                bestSellers: false,
                stock: req.body.stock
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
    },
    editProduct: async (req, res) => {
        try {
            const validations = validationResult(req);
            const errors = handleValidationErrors(validations);

            if (errors) {
                return res.status(200).json(errors);
            }

            let productDB = await Product.findByPk(req.body.id, {
                include: [
                    { association: "productImage" }
                ]
            });

            await productDB.update({
                title: req.body.title ? req.body.title : productDB.title,
                author: req.body.author ? req.body.author : productDB.author,
                editorial: req.body.editorial ? req.body.editorial : productDB.editorial,
                price: req.body.price ? req.body.price : productDB.price,
                collection: req.body.collection ? req.body.collection : productDB.collection,
                numberPages: req.body.numberPages ? req.body.numberPages : productDB.numberPages,
                language: req.body.language ? req.body.language : productDB.language,
                format: req.body.format ? req.body.format : productDB.format,
                isbn: req.body.isbn ? req.body.isbn : productDB.isbn,
                weight: req.body.weight ? req.body.weight : productDB.weight,
                edition: req.body.edition ? req.body.edition : productDB.editProduct,
                stock: req.body.stock ? req.body.stock : productDB.stock
            })

            if (req.files && req.files.length > 0) {
                const imagenBuffer = req.files[0].buffer
                const base64Image = imagenBuffer.toString("base64");

                await productDB.productImage.update({
                    productId: productDB.id,
                    image: base64Image
                })
            }

            return res.status(200).json("Product edited")
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    addFavorites: async (req, res) => {
        try {
            const userDB = await User.findByPk(req.body.id, {
                include: [
                    { association: "favoritesProducts" }
                ]
            })

            let productFound = false

            for (let product of userDB.favoritesProducts) {
                if (product.id === parseInt(req.body.productId)) {
                    productFound = true;
                    break;
                }
            }

            if (!productFound) {
                await FavoriteProduct.create({
                    userId: req.body.id,
                    productId: req.body.productId
                })
            }

            return res.status(200).json("Product added to favorites")
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    toSaved: async (req, res) => {
        try {
            const userDB = await User.findByPk(req.body.id, {
                include: [
                    { association: "productsSalved" }
                ]
            })

            let productFound = false

            for (let product of userDB.productsSalved) {
                if (product.id === parseInt(req.body.productId)) {
                    productFound = true;
                    break;
                }
            }

            if (!productFound) {
                await SavedProduct.create({
                    userId: req.body.id,
                    productId: req.body.productId
                })
            }

            return res.status(200).json("Product saved")
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    favorites: async (req, res) => {
        try {
            const favorites = await FavoriteProduct.findAll({ where: { userId: req.params.id } })

            const data = await Promise.all(favorites.map(async (f) => {
                const product = await Product.findByPk(f.productId, { include: [{ association: "productImage" }] })

                return {
                    title: product.title,
                    price: product.price,
                    image: product.productImage.image
                }
            }))

            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    saved: async (req, res) => {
        // try {
        //     const favorites = await FavoriteProduct.findAll({ where: { userId: req.params.id } })

        //     const data = await Promise.all(favorites.map(async (f) => {
        //         const product = await Product.findByPk(f.productId, { include: [{ association: "productImage" }] })

        //         return {
        //             title: product.title,
        //             price: product.price,
        //             image: product.productImage.image
        //         }
        //     }))

        //     return res.status(200).json(data)
        // } catch (error) {
        //     return res.status(500).json(error)
        // }
    }
}