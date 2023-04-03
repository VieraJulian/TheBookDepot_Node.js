const { Product, User, CartProduct, Cart, Order } = require("../database/models/index");

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
                totalSales,
                quantityOrdesDelivered,
                quantityOrders: ordersDB.length,
                quantityProducts: productsDB.length,
                quantityUsers: usersDB.length
            }
    
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}