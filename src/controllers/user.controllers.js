const { User, UserImage } = require("../database/models/index")
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

            let phone;

            if (req.body.phone && req.body.phone != null) {
                phone = req.body.phone;
            }

            await userDB.update({
                firstName: req.body.firstName ? req.body.firstName : userDB.firstName,
                lastName: req.body.lastName ? req.body.lastName : userDB.lastName,
                birthDate: req.body.birthDate ? req.body.birthDate : userDB.birthDate,
                phone: phone ? phone : null
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
    }
};