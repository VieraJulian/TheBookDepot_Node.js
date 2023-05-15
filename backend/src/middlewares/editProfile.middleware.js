const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const validations = require("../validations/editProfile.validations")

const { verifyToken } = require('./verifyToken.middleware')

module.exports = [verifyToken, upload.array('image', 1), validations]