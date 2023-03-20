// Importar multer
const multer = require('multer');

const validations = require("../validations/register.validations")

// Configuración de multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = [upload.single('image'), validations]