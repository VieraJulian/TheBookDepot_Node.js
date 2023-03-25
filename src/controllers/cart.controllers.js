const { User, Cart, CartProduct, Product } = require("../database/models/index")

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
                    { association: "cartProduct" }
                ]
            })

            let productFound = false;
            let total = parseInt(productDB.price)

            for (let cartProduct of cart.cartProduct) {
                if (cartProduct.productId === parseInt(req.body.productId)) {
                    productFound = true;
                    await cartProduct.update({ quantity: cartProduct.quantity + 1 });
                    break;
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
    }
}