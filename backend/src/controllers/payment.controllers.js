const { Product, Order, OrderItem } = require("../database/models/index")
const moment = require('moment');
const mercadopago = require('mercadopago');

module.exports = {
    createOrder: async (req, res) => {

        const productsData = req.body.cart;
        const productIds = productsData.map(product => product.id);

        const products = await Promise.all(
            productIds.map(async (productId) => {
                return await Product.findByPk(productId);
            })
        );

        const items = products.map(item => {
            const { quantity } = productsData.find(p => p.id === item.id);

            return {
                id: item.id,
                title: item.title,
                quantity: quantity,
                currency_id: 'ARS',
                unit_price: Number(item.price)
            }
        })

        mercadopago.configure({
            access_token: process.env.ACCESS_TOKEN
        });

        const result = await mercadopago.preferences.create({
            items: items,
            back_urls: {
                success: "http://localhost:5173/",
                failure: "http://localhost:5173/",
                pending: "http://localhost:8000/pending",
            },
            notification_url: `https://db29-181-15-127-212.sa.ngrok.io/webhook?userId=${req.body.userId}&addressId=${req.body.addressId}`
        })

        return res.status(200).json(result.body);
    },
    receiveWebhook: async (req, res) => {
        const payment = req.query

        try {
            if (payment.type === 'payment') {
                const data = await mercadopago.payment.findById(payment['data.id'])
                const status = data.response.status
                const products = data.response.additional_info.items
                const userId = req.query.userId
                const addressId = req.query.addressId

                if (status !== 'approved') return

                const productIds = products.map(product => parseInt(product.id));

                const now = moment();
                const orderNumber = Math.floor(now.valueOf() / 1000) + Math.floor(Math.random() * 10000);

                const currentDate = moment();
                const currentDateFormatted = currentDate.format('YYYY-MM-DD');

                const productsDB = await Promise.all(
                    productIds.map(async (productId) => {
                        return await Product.findByPk(productId);
                    })
                );

                let totalPay = 0;
                productsDB.map(product => {
                    const { quantity } = products.find(p => parseInt(p.id) === product.id);
                    totalPay += product.price * quantity
                })

                const newOrder = await Order.create({
                    userId,
                    addressId: addressId === 'null' ? null : addressId,
                    total: totalPay,
                    paymentMethod: addressId !== 'null' ? "Mercado Pago" : "Efectivo",
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
                    productsDB.map(async product => {
                        const { quantity } = products.find(p => parseInt(p.id) === product.id);
                        const newStock = product.stock - parseInt(quantity);
                        await Product.update({ stock: newStock, sold: product.sold + parseInt(quantity) }, { where: { id: product.id } })

                    })
                )

            }

            return res.status(200).json("successful purchase");
        } catch (error) {
            console.log(error)
            return res.sendStatus(500).json({ error: error.message })
        }
    }
}