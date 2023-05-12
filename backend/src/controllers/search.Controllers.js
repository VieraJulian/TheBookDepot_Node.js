const { Product } = require("../database/models/index");
const { Op } = require('sequelize');

module.exports = {
    search: async (req, res) => {
        try {
            const { p } = req.query;

            const productsDB = await Product.findAll({
                where: {
                    title: {
                        [Op.like]: `${p}%`
                    }
                }
            })

            return res.status(200).json(productsDB)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}