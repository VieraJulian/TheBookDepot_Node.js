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

            if (req.files) {
                const imagenBuffer = req.files[0].buffer
                const base64Image = imagenBuffer.toString("base64");

                await UserImage.create({
                    userId: userCreated.id,
                    image: base64Image
                })
            }

            return res.status(200).json(userCreated)
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

            let users = await User.findAll()

            let userDB = users.find(user => user.email === req.body.email)

            return res.status(200).json(userDB)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
};