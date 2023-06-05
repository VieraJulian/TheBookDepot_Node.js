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
                }, 
                include: [{ association: "productImage"}]
            })

            const data = productsDB.map((product) => {
                const buffer = product.productImage.image
                const base64 = Buffer.from(buffer).toString('base64');
                const image = `data:image/png;base64,${Buffer.from(base64, 'base64').toString()}`;

                return {
                    id: product.id,
                    title: product.title,
                    image: image
                };
            })

            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}