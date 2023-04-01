const { Router } = require("express")
const router = Router()
const cartControllers = require("../controllers/cart.controllers")

router.post("/addProduct", cartControllers.addProduct)
router.post("/buy", cartControllers.buy)

module.exports = router