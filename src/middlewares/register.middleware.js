// Importar multer
const multer = require('multer');

// Configuración de multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = [upload.single('image')]