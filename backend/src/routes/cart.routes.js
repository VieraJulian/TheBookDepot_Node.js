const { Router } = require("express")
const router = Router()
const cartControllers = require("../controllers/cart.controllers")

const { verifyToken } = require('../middlewares/verifyToken.middleware')

router.post("/pay", cartControllers.pay)
router.post("/:id", verifyToken, cartControllers.detail)

module.exports = router