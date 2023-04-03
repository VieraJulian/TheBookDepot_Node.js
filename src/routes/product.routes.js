const { Router } = require("express");
const router = Router();
const productControllers = require("../controllers/product.controllers")

const createProductMiddleware = require("../middlewares/createProduct.middleware")
const editProductMiddleware = require("../middlewares/editProduct.middleware")

router.post("/create", createProductMiddleware, productControllers.createProduct)
router.post("/edit", editProductMiddleware, productControllers.editProduct)
router.post("/addFavorites", productControllers.addFavorites)
router.post("/toSave", productControllers.toSaved)
router.get("/:id/favorites", productControllers.favorites)
router.get("/:id/saved", productControllers.saved)
router.get("/:id/detail", productControllers.detail)
router.post("/:id/delete", productControllers.delete)
router.get("/all", productControllers.all)

module.exports = router