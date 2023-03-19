const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/user.controllers")
const registerMiddleware = require("../middlewares/register.middleware")

router.post("/register", registerMiddleware, userControllers.register)
router.post("/login", userControllers.login)

module.exports = router