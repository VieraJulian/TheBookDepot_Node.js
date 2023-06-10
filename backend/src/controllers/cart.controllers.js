const { Product } = require("../database/models/index")

module.exports = {
    detail: async (req, res) => {
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
                const { quantity } = productsData.find(p => p.id === product.id);
                const buffer = product.productImage.image
                const base64 = Buffer.from(buffer).toString('base64');
                const image = `data:image/png;base64,${Buffer.from(base64, 'base64').toString()}`;

                return {
                    id: product.id,
                    stock: product.stock,
                    title: product.title,
                    image: image,
                    quantity,
                    price: product.price,
                    totalPrice: product.price * quantity
                };
            });

            let total = 0
            result.map(p => {
                total += p.totalPrice
            })

            let quantityOfProducts = 0
            productsData.map(product => {
                quantityOfProducts += product.quantity
            })

            const data = {
                total: total.toFixed(2),
                quantityOfProducts,
                products: result
            }

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}