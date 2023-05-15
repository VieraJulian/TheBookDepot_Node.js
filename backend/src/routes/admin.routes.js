const { Router } = require("express");
const router = Router();
const adminControllers = require("../controllers/admin.controllers")

const { verifyToken } = require('../middlewares/verifyToken.middleware')

router.get("/stats", verifyToken, adminControllers.stats)
router.post("/orders/delivered", verifyToken, adminControllers.delivered)

module.exports = router