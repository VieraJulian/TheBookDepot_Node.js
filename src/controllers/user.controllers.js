const { User, UserImage } = require("../database/models/index")
const { hashSync } = require("bcryptjs")
const { validationResult } = require("express-validator")

module.exports = {
    register: async (req, res) => {
        try {
            let validations = validationResult(req)
            let { errors } = validations
            let errorMsg = errors.map(err => Object({
                param: err.param,
                value: err.value,
                msg: err.msg
            }))

            if (errors && errors.length > 0) {
                if (req.files) {
                    req.files.forEach(img => {
                        unlinkSync(resolve(__dirname, "../../uploads/articles/" + img.filename))
                    });
                }
                return res.status(200).json(errorMsg)
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

            if (req.file) {
                await UserImage.create({
                    userId: userCreated.id,
                    image: req.file.buffer
                })
            }

            return res.status(200).json(userCreated)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    login: async (req, res) => {
        try {


        } catch (error) {
            return res.status(500).json(error)
        }
    }
};