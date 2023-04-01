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
                    total = 0
                }
            }

            if (!productFound) {
                if (productDB.stock > 0) {
                    await CartProduct.create({ cartId: cart.id, productId: req.body.productId, quantity: 1 });
                } else {
                    total = 0;
                }
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
                const now = new Date();
                const orderNumber = Math.floor(now.getTime() / 1000) + Math.floor(Math.random() * 10000);

                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, "0");
                const day = String(currentDate.getDate()).padStart(2, "0");
                const currentDateFormatted = `${year}/${month}/${day}`;

                let newOrder = await Order.create({
                    userId: req.body.id,
                    addressId: req.body.addressId,
                    total: cart.total,
                    paymentMethod: req.body.paymentMethod,
                    shippingMethod: req.body.shippingMethod,
                    date: currentDateFormatted,
                    orderNumber: orderNumber,
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

                for (const p of cart.cartProducts) {
                    try {
                        const product = await Product.findByPk(p.productId);
                        const newStock = product.stock - parseInt(p.quantity);
                        await Product.update({ stock: newStock }, { where: { id: p.productId } })

                        if (newStock < 1) {
                            const cartPs = await CartProduct.findAll({ where: { productId: p.productId } })

                            for (const cp of cartPs) {
                                const carts = await Cart.findAll({ where: { id: cp.cartId } })

                                for (const cart of carts) {
                                    await Cart.update({ total: cart.total - product.price }, { where: { id: cart.id } })
                                }

                                await CartProduct.destroy({ where: { id: cp.id } })
                            }
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }

            }

            return res.status(200).json("successful purchase");
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    detail: async (req, res) => {
        try {
            let cartDB = await Cart.findAll({
                where: { userId: req.params.id },
                include: [{
                    association: "cartProducts",
                    include: [{
                        association: "product",
                        include: [{
                            association: "productImage",
                        }]
                    }]
                }]
            });

            let productsQuantity = 0

            const cartP = cartDB[0].cartProducts.map((cp) => {
                productsQuantity = productsQuantity + parseInt(cp.quantity)

                return {
                    title: cp.product.title,
                    price: cp.product.price,
                    quantity: cp.quantity,
                    total: parseInt(cp.quantity) * parseInt(cp.product.price),
                    imagen: cp.product.productImage.image
                }

            })

            let data = {
                total: cartDB[0].total,
                quantity: productsQuantity,
                cartProducts: cartP
            }

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }


}