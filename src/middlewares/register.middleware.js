const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const validations = require("../validations/register.validations")

module.exports = [upload.single('image'), validations]