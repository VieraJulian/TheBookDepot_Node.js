const { Router } = require("express");
const router = Router();
const productControllers = require("../controllers/product.controllers")

const createProductMiddleware = require("../middlewares/createProduct.middleware")
const editProductMiddleware = require("../middlewares/editProduct.middleware")

const { verifyToken } = require('../middlewares/verifyToken.middleware')

router.post("/create", createProductMiddleware, productControllers.createProduct)
router.post("/edit", editProductMiddleware, productControllers.editProduct)
router.post("/addFavorites", verifyToken, productControllers.addFavorites)
router.post("/delete/favorites", verifyToken, productControllers.deleteFavorites)
router.post("/toSave", verifyToken, productControllers.toSaved)
router.post("/delete/saved", verifyToken, productControllers.deleteSaved)
router.post("/:id/delete", verifyToken, productControllers.delete)
router.get("/:id/favorites", verifyToken, productControllers.favorites)
router.get("/:id/saved", verifyToken, productControllers.saved)
router.get("/:id/detail", productControllers.detail)
router.get("/all", productControllers.all)
router.get("/bestSellers", productControllers.bestSellers)
router.get("/english", productControllers.english)
router.post("/info", verifyToken, productControllers.info)

module.exports = router