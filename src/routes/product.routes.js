const { Router } = require("express");
const router = Router();
const productControllers = require("../controllers/product.controllers")

const createProductMiddleware = require("../middlewares/createProduct.middleware")
const editProductMiddleware = require("../middlewares/editProduct.middleware")

router.post("/create", createProductMiddleware, productControllers.createProduct)
router.post("/edit", editProductMiddleware, productControllers.editProduct)
router.post("/addFavorites", productControllers.addFavorites)
router.post("/delete/favorites", productControllers.deleteFavorites)
router.post("/toSave", productControllers.toSaved)
router.post("/delete/saved", productControllers.deleteSaved)
router.post("/:id/delete", productControllers.delete)
router.get("/:id/favorites", productControllers.favorites)
router.get("/:id/saved", productControllers.saved)
router.get("/:id/detail", productControllers.detail)
router.get("/all", productControllers.all)
router.get("/bestSellers", productControllers.bestSellers)

module.exports = router