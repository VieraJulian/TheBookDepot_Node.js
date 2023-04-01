const { Router } = require("express");
const router = Router();
const productControllers = require("../controllers/product.controllers")

const createProductMiddleware = require("../middlewares/createProduct.middleware")
const editProductMiddleware = require("../middlewares/editProduct.middleware")

router.post("/create", createProductMiddleware, productControllers.createProduct)
router.post("/edit", editProductMiddleware, productControllers.editProduct)
router.post("/addFavorites", productControllers.addFavorites)
router.post("/toSave", productControllers.toSaved)
router.get("/favorites/:id", productControllers.favorites)

module.exports = router