const { User, Cart, CartProduct, Product, Order, OrderItem } = require("../database/models/index")

module.exports = {
    addProduct: async (req, res) => {
        try {
            const userDB = await User.findByPk(req.body.id, {
                include: [
                    { association: "cart" }
                ]
            })

            const productDB = await Product.findByPk(req.body.productId)

            let cartId;

            if (userDB.cart == null) {
                const cart = await Cart.create({
                    userId: userDB.id,
                    total: 0
                })

                cartId = cart.id
            } else {
                cartId = userDB.cart.id
            }

            const cart = await Cart.findByPk(cartId, {
                include: [
                    { association: "cartProducts" }
                ]
            })

            let productFound = false;
            let total = parseInt(productDB.price)

            for (let cartProducts of cart.cartProducts) {
                if (cartProducts.productId === parseInt(req.body.productId)) {
                    productFound = true;

                    const product = await Product.findByPk(req.body.productId, { attributes: ['stock'] });
                    const stock = product.stock;

                    if (stock > cartProducts.quantity) {
                        await cartProducts.update({ quantity: cartProducts.quantity + 1 });
                        break;
                    }
                }
            }

            if (!productFound) {
                await CartProduct.create({ cartId: cart.id, productId: req.body.productId, quantity: 1 });
            }

            await cart.update({ total: parseInt(cart.total) + total });

            return res.status(200).json("Product added")
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    buy: async (req, res) => {
        try {
            let userDB = await User.findByPk(req.body.id, {
                include: [
                    { association: "cart" }
                ]
            })

            let cartId = userDB.cart.id;

            let cart = await Cart.findByPk(cartId, {
                include: [
                    { association: "cartProducts" }
                ]
            })

            if (parseInt(cart.total) > 0) {

                let newOrder = await Order.create({
                    userId: req.body.id,
                    total: cart.total,
                    paymentMethod: req.body.paymentMethod,
                    shippingMethod: req.body.shippingMethod,
                    delivered: false
                })

                cart.cartProducts.forEach(async (p) => {
                    await OrderItem.create({
                        orderId: newOrder.id,
                        productId: p.productId,
                        quantity: p.quantity,
                    })
                });

                cart.cartProducts.forEach(async (p) => {
                    await CartProduct.destroy({ where: { id: p.id } })
                });

                await cart.update({
                    total: 0
                })

                cart.cartProducts.forEach(async (p) => {
                    const product = await Product.findByPk(p.productId, { attributes: ['stock'] });
                    const newStock = product.stock - parseInt(p.quantity);
                    await Product.update({ stock: newStock }, { where: { id: p.productId } })
                })
            }

            return res.status(200).json("successful purchase");
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}