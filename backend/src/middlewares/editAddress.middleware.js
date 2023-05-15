const validations = require("../validations/editAddress.validations")

const { verifyToken } = require('./verifyToken.middleware')

module.exports = [verifyToken, validations]