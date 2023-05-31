const { Router } = require("express");
const router = Router();
const productControllers = require("../controllers/product.controllers")

const createProductMiddleware = require("../middlewares/createProduct.middleware")
const editProductMiddleware = require("../middlewares/editProduct.middleware")

const { verifyToken } = require('../middlewares/verifyToken.middleware')

router.post("/create", createProductMiddleware, productControllers.createProduct)
router.post("/edit", editProductMiddleware, productControllers.editProduct)
router.post("/:id/delete", verifyToken, productControllers.delete)
router.post("/info", verifyToken, productControllers.info)
router.get("/:id/detail", productControllers.detail)
router.get("/all", productControllers.all)
router.get("/bestSellers", productControllers.bestSellers)
router.get("/english", productControllers.english)

module.exports = router