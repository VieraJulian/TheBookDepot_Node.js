const { Router } = require("express")
const router = Router()
const cartControllers = require("../controllers/cart.controllers")

router.post("/addProduct", cartControllers.addProduct)
router.post("/buy", cartControllers.buy)
router.get("/:id", cartControllers.detail)

module.exports = router