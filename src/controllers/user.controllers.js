const { User, UserImage } = require("../database/models/index")
const { hashSync } = require("bcryptjs")

module.exports = {
    register: async (req, res) => {
        try {

            let fechaStr = req.body.birthDate;
            let partes = fechaStr.split("/");
            let fechaJS = new Date(partes[2], partes[1] - 1, partes[0]);
            let birthDate = fechaJS.toISOString().slice(0, 19).split('T')[0];

            const userCreate = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthDate: birthDate,
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