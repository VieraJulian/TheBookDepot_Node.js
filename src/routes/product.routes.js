const { Router } = require("express");
const router = Router();
const productControllers = require("../controllers/product.controllers")

const createProductMiddleware = require("../middlewares/createProduct.middleware")

router.post("/create", createProductMiddleware, productControllers.createProduct)

module.exports = router