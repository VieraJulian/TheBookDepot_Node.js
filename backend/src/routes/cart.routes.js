const { Router } = require("express")
const router = Router()
const cartControllers = require("../controllers/cart.controllers")

const { verifyToken } = require('../middlewares/verifyToken.middleware')

router.post("/product/add", verifyToken, cartControllers.addProduct)
router.post("/product/delete", verifyToken, cartControllers.deleteProduct)
router.post("/buy", verifyToken, cartControllers.buy)
router.get("/:id", verifyToken, cartControllers.detail)
router.post("/add", verifyToken, cartControllers.add)
router.post("/remove", verifyToken, cartControllers.remove)

module.exports = router