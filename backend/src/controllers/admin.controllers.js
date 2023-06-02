const { Product, User, Order, Address } = require("../database/models/index");

module.exports = {
    stats: async (req, res) => {
        try {
            let totalSales = 0;
            let quantityOrdesDelivered = 0;
            const ordersDB = await Order.findAll()
            const productsDB = await Product.findAll()
            const usersDB = await User.findAll()

            ordersDB.forEach(order => {
                totalSales = totalSales + parseFloat(order.total)
                if (order.delivered) {
                    quantityOrdesDelivered = quantityOrdesDelivered + 1
                }
            });

            const data = {
                totalSales: totalSales.toFixed(2),
                quantityOrdesDelivered,
                quantityOrders: ordersDB.length,
                quantityProducts: productsDB.length,
                quantityUsers: usersDB.length
            }

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    delivered: async (req, res) => {
        try {
            const orderDB = await Order.findByPk(req.body.orderId)

            await orderDB.update({ delivered: true })

            return res.status(200).json("Order updated");
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    orders: async (req, res) => {
        try {
            const { page, size } = req.query;

            const limit = parseInt(size);
            const offset = (page - 1) * size;

            const ordersDB = await Order.findAll({
                limit,
                offset,
                order: [['date', 'ASC']]
            })

            const totalProducts = await Order.count();

            const totalPages = Math.ceil(totalProducts / limit);

            const orders = await Promise.all(
                ordersDB.map(async order => {
                    const address = await Address.findByPk(order.addressId)

                    return {
                        id: order.id,
                        total: order.total,
                        paymentMethod: order.paymentMethod,
                        date: order.date,
                        orderNumber: order.orderNumber,
                        delivered: order.delivered,
                        address
                    }
                })
            )

            const data = {
                totalPages,
                orders
            }

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
} 