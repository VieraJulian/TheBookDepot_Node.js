const { Product, ProductImage, User, FavoriteProduct, SavedProduct, CartProduct, Cart } = require("../database/models/index")
const { validationResult } = require("express-validator");
const { Op } = require('sequelize');


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
                sold: 0,
                stock: req.body.stock
            })

            const imagenBuffer = req.files[0].buffer
            const base64Image = imagenBuffer.toString("base64");

            await ProductImage.create({
                productId: productCreate.id,
                image: base64Image
            })

            return res.status(200).json({ id: productCreate.id })
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
    detail: async (req, res) => {
        try {
            const productDB = await Product.findByPk(req.params.id, { include: [{ association: "productImage" }] })

            const buffer = productDB.productImage.image
            const base64 = Buffer.from(buffer).toString('base64');
            const image = `data:image/png;base64,${Buffer.from(base64, 'base64').toString()}`;

            const data = {
                id: productDB.id,
                title: productDB.title,
                author: productDB.author,
                editorial: productDB.editorial,
                price: productDB.price,
                collection: productDB.collection,
                numberPages: productDB.numberPages,
                language: productDB.language,
                format: productDB.format,
                isbn: productDB.isbn,
                weight: productDB.weight,
                edition: productDB.edition,
                sold: productDB.sold,
                stock: productDB.stock,
                image: image
            }

            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    info: async (req, res) => {
        try {
            const productsData = req.body;
            const productIds = productsData.map(product => product.id);

            const products = await Promise.all(
                productIds.map(async (productId) => {
                    return await Product.findByPk(productId, {
                        include: [{
                            association: "productImage"
                        }],
                    });
                })
            );

            const result = products.map(product => {
                const buffer = product.productImage.image
                const base64 = Buffer.from(buffer).toString('base64');
                const image = `data:image/png;base64,${Buffer.from(base64, 'base64').toString()}`;

                return {
                    id: product.id,
                    stock: product.stock,
                    title: product.title,
                    image: image,
                    price: product.price
                };
            });

            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    delete: async (req, res) => {
        try {
            const productDB = await Product.findByPk(req.params.id, { include: [{ association: "productImage" }] });
            if (productDB) {

                const productImage = productDB.productImage;
                if (productImage) {
                    await productImage.destroy();
                }

                await productDB.destroy();
            }

            return res.status(200).json("Product deleted");
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    all: async (req, res) => {
        try {
            const { page, size } = req.query;

            const limit = parseInt(size);
            const offset = (page - 1) * size;

            const totalProductsDB = await Product.findAll();

            const totalProducts = totalProductsDB.length

            const productsDB = await Product.findAll({
                limit,
                offset,
                include: [{ association: "productImage" }],
                order: [['createdAt', 'DESC']]
            });

            const totalPages = Math.ceil(totalProducts / limit);

            const productsAll = productsDB.map(p => {
                const buffer = p.productImage.image
                const base64 = Buffer.from(buffer).toString('base64');
                const image = `data:image/png;base64,${Buffer.from(base64, 'base64').toString()}`;

                return {
                    id: p.id,
                    title: p.title,
                    author: p.author,
                    editorial: p.editorial,
                    price: p.price,
                    collection: p.collection,
                    numberPages: p.numberPages,
                    language: p.language,
                    format: p.format,
                    isbn: p.isbn,
                    weight: p.weight,
                    edition: p.edition,
                    sold: p.sold,
                    stock: p.stock,
                    image: image
                }
            })

            const data = {
                totalPages,
                productsAll
            }

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    bestSellers: async (req, res) => {
        try {
            const { page, size } = req.query;

            const limit = parseInt(size);
            const offset = (page - 1) * size;

            const productsDB = await Product.findAll({
                where: {
                    sold: {
                        [Op.gte]: 20
                    }
                },
                limit,
                offset,
                include: [{ association: "productImage" }],
                order: [
                    ['sold', 'DESC']
                ]
            });

            const totalProducts = await Product.count();

            const totalPages = Math.ceil(totalProducts / limit);

            const productsAll = productsDB.map(p => {
                const buffer = p.productImage.image
                const base64 = Buffer.from(buffer).toString('base64');
                const image = `data:image/png;base64,${Buffer.from(base64, 'base64').toString()}`;

                return {
                    id: p.id,
                    title: p.title,
                    author: p.author,
                    editorial: p.editorial,
                    price: p.price,
                    collection: p.collection,
                    numberPages: p.numberPages,
                    language: p.language,
                    format: p.format,
                    isbn: p.isbn,
                    weight: p.weight,
                    edition: p.edition,
                    sold: p.sold,
                    stock: p.stock,
                    image: image
                }
            })

            const data = {
                totalPages,
                productsAll
            }

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    english: async (req, res) => {
        try {
            const { page, size } = req.query;

            const limit = parseInt(size);
            const offset = (parseInt(page) - 1) * size;

            const productsDB = await Product.findAll({
                where: {
                    [Op.or]: [
                        { language: "ingles" },
                        { language: "inglés" }
                    ]
                },
                limit,
                offset,
                include: [{ association: "productImage" }],
                order: [['createdAt', 'DESC']]
            });

            const totalProducts = await Product.count({
                where: {
                    [Op.or]: [
                        { language: "ingles" },
                        { language: "inglés" }
                    ]
                }
            });

            const totalPages = Math.ceil(totalProducts / limit);

            const englishAll = productsDB.map(p => {
                const buffer = p.productImage.image
                const base64 = Buffer.from(buffer).toString('base64');
                const image = `data:image/png;base64,${Buffer.from(base64, 'base64').toString()}`;

                return {
                    id: p.id,
                    title: p.title,
                    author: p.author,
                    editorial: p.editorial,
                    price: p.price,
                    collection: p.collection,
                    numberPages: p.numberPages,
                    language: p.language,
                    format: p.format,
                    isbn: p.isbn,
                    weight: p.weight,
                    edition: p.edition,
                    sold: p.sold,
                    stock: p.stock,
                    image: image
                }
            })

            const data = {
                totalPages,
                englishAll
            }

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}