const { User, UserImage } = require("../database/models/index")
const { hashSync } = require("bcryptjs")

module.exports = {
    register: async (req, res) => {
        try {
            let image;

            if (req.file) {
                let avatar = await UserImage.create({
                    image: req.file.buffer
                })

                image = avatar.id
            } else {
                image = null
            }

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
                admin: String(req.body.email).includes("@thebookdepot.com"),
                userImageId: image,
            }

            const userCreated = await User.create(userCreate)

            return res.status(200).json(userCreated)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
};