const { User, UserImage, Address, Order, OrderItem } = require("../database/models/index")
const { hashSync } = require("bcryptjs")
const { validationResult } = require("express-validator")

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
    register: async (req, res) => {
        try {
            const validations = validationResult(req);
            const errors = handleValidationErrors(validations);

            if (errors) {
                return res.status(200).json(errors);
            }

            const userCreate = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthDate: req.body.birthDate,
                phone: req.body.phone ? req.body.phone : null,
                email: req.body.email,
                password: hashSync(req.body.password, 10),
                admin: String(req.body.email).includes("@thebookdepot.com")
            }

            const userCreated = await User.create(userCreate)

            if (req.files && req.files.length > 0) {
                const imagenBuffer = req.files[0].buffer
                const base64Image = imagenBuffer.toString("base64");

                await UserImage.create({
                    userId: userCreated.id,
                    image: base64Image
                })
            }

            return res.status(200).json("User registered")
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    login: async (req, res) => {
        try {
            const validations = validationResult(req);
            const errors = handleValidationErrors(validations);

            if (errors) {
                return res.status(200).json(errors);
            }

            const users = await User.findAll()

            const userDB = users.find(user => user.email === req.body.email)

            return res.status(200).json({ id: userDB.id })
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    editProfile: async (req, res) => {
        try {
            const validations = validationResult(req);
            const errors = handleValidationErrors(validations);

            if (errors) {
                return res.status(200).json(errors);
            }

            let userDB = await User.findByPk(req.body.id, {
                include: [
                    { association: "image" }
                ]
            });

            await userDB.update({
                firstName: req.body.firstName ? req.body.firstName : userDB.firstName,
                lastName: req.body.lastName ? req.body.lastName : userDB.lastName,
                birthDate: req.body.birthDate ? req.body.birthDate : userDB.birthDate,
                phone: req.body.phone && req.body.phone != null ? req.body.phone : null
            })

            let base64Image;

            if (req.files && req.files.length > 0) {
                const imagenBuffer = req.files[0].buffer
                base64Image = imagenBuffer.toString("base64");
            }

            if (req.files && req.files.length > 0 && userDB.image != null) {
                await userDB.image.update({
                    image: base64Image
                })
            } else if (req.files && req.files.length > 0 && userDB.images == null) {
                await UserImage.create({
                    userId: userDB.id,
                    image: base64Image
                })
            }

            return res.status(200).json("Edited profile")
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    createAdress: async (req, res) => {
        try {
            const validations = validationResult(req);
            const errors = handleValidationErrors(validations);

            if (errors) {
                return res.status(200).json(errors);
            }

            let userDB = await User.findByPk(req.body.id, {
                include: [
                    { association: "addresses" }
                ]
            });

            if (userDB.addresses.length < 2) {
                await Address.create({
                    userId: req.body.id,
                    addresse: req.body.addresse,
                    phone: req.body.phone && req.body.phone != null ? req.body.phone : null,
                    province: req.body.province,
                    city: req.body.city,
                    address: req.body.address,
                })
            }

            return res.status(200).json("Address created")
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    editAddress: async (req, res) => {
        try {
            const validations = validationResult(req);
            const errors = handleValidationErrors(validations);

            if (errors) {
                return res.status(200).json(errors);
            }

            const addressDB = await Address.findByPk(req.body.idAddress)

            await addressDB.update({
                addresse: req.body.addresse ? req.body.addresse : addressDB.addresse,
                phone: req.body.phone && req.body.phone != null ? req.body.phone : null,
                province: req.body.province ? req.body.province : addressDB.province,
                city: req.body.city ? req.body.city : addressDB.city,
                address: req.body.address ? req.body.address : addressDB.address,
            })

            return res.status(200).json("Edited Address")
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    profile: async (req, res) => {
        try {
            let userDB = await User.findByPk(req.params.id, {
                include: [
                    { association: "image" }
                ]
            });

            let data = {
                firstName: userDB.firstName,
                lastName: userDB.lastName,
                birthDate: userDB.birthDate,
                phone: userDB.phone,
                email: userDB.email,
                image: userDB.image.image
            }

            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    addresses: async (req, res) => {
        try {
            let addressesDB = await Address.findAll({
                where: {
                    userId: req.params.id
                }
            }, {
                include: [
                    { association: "user" }
                ]
            })

            let data = addressesDB.map(address => Object({
                addresse: address.addresse,
                phone: address.phone,
                province: address.province,
                city: address.city,
                address: address.address
            }))

            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    orders: async (req, res) => {
        try {
            const ordersDB = await Order.findAll({
                where: {
                    userId: req.params.id
                },
                include: [
                    { association: "user" },
                    {
                        association: "orderItems",
                        include: [
                            {
                                association: "product",
                                include: [
                                    { association: "productImage" }
                                ]
                            }
                        ]
                    }
                ]
            });

            const data = await Promise.all(ordersDB.map(async order => {
                const address = await Address.findByPk(order.addressId);
                const orderItems = order.orderItems.map(oi => {
                    return {
                        image: oi.product.productImage.image,
                        title: oi.product.title,
                        quantity: oi.quantity,
                        price: oi.product.price,
                    }
                })

                return {
                    orderNumber: order.orderNumber,
                    date: order.date,
                    total: order.total,
                    delivered: order.delivered,
                    paymentMethod: order.paymentMethod,
                    address: {
                        addresse: address.addresse,
                        phone: address.phone,
                        province: address.province,
                        city: address.city,
                        address: address.address
                    },
                    orderItems
                };
            }));

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    deleteAddress: async (req, res) => {
        try {
            const addressDB = await Address.findByPk(req.body.addressId)
            const ordersDB = await Order.findAll({ where: { addressId: req.body.addressId } })

            if (!ordersDB.length > 0) {
                await addressDB.destroy();
            }

            return res.status(200).json("Address deleted");
        } catch (error) {
            return res.status(500).json(error)
        }
    }
};