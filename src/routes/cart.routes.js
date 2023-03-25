const { Router } = require("express")
const router = Router()
const cartControllers = require("../controllers/cart.controllers")

router.post("/addProduct", cartControllers.addProduct)

module.exports = router