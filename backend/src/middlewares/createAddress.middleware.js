const validations = require("../validations/createAddress.validations")

const { verifyToken } = require('./verifyToken.middleware')

module.exports = [verifyToken, validations]