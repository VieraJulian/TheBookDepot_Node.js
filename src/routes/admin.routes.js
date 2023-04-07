const { Router } = require("express");
const router = Router();
const adminControllers = require("../controllers/admin.controllers")

router.get("/stats", adminControllers.stats)
router.post("/orders/delivered", adminControllers.delivered)

module.exports = router