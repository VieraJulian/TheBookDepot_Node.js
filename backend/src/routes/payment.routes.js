const { Router } = require("express")
const router = Router()

const { verifyToken } = require('../middlewares/verifyToken.middleware')

const paymentControllers = require("../controllers/payment.controllers")

router.post("/create-order", verifyToken, paymentControllers.createOrder)
router.get("/pending", (req, res) => res.send("pending"))
router.post("/webhook", paymentControllers.receiveWebhook)

module.exports = router