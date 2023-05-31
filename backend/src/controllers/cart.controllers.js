const { User, Cart, CartProduct, Product, Order, OrderItem } = require("../database/models/index")

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
    },
    pay: async (req, res) => {
        const userId = req.body.id
        const addressId = req.body.addressId;
        const products = req.body.products;
        const productIds = products.map(product => product.id);

        const now = new Date();
        const orderNumber = Math.floor(now.getTime() / 1000) + Math.floor(Math.random() * 10000);

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        const currentDateFormatted = `${year}/${month}/${day}`;

        const productsDB = await Promise.all(
            productIds.map(async (productId) => {
                return await Product.findByPk(productId);
            })
        );

        let totalPay = 0;
        productsDB.map(product => {
            const { quantity } = products.find(p => p.id === product.id);
            totalPay += product.price * quantity
        })

        const newOrder = await Order.create({
            userId,
            addressId,
            total: totalPay,
            paymentMethod: addressId ? "Mercado Pago" : "Efectivo",
            date: currentDateFormatted,
            orderNumber: orderNumber,
            delivered: false
        })

        await Promise.all(
            products.map(async product => {
                await OrderItem.create({
                    orderId: newOrder.id,
                    productId: product.id,
                    quantity: product.quantity,
                })
            })
        )

        await Promise.all(
            productsDB.map( async product => {
                const { quantity } = products.find(p => p.id === product.id);
                const newStock = product.stock - parseInt(quantity);
                await Product.update({ stock: newStock, sold: product.sold + parseInt(quantity) }, { where: { id: product.id } })

            })
        )

        try {
            return res.status(200).json("successful purchase");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}