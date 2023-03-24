const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const validations = require("../validations/editProfile.validations")

module.exports = [upload.array('image', 1), validations]