const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/user.controllers")

const registerMiddleware = require("../middlewares/register.middleware")
const loginMiddleware = require("../middlewares/login.middleware");
const editProfileMiddleware = require("../middlewares/editProfile.middleware")
const createAdressMiddleware = require("../middlewares/createAddress.middleware")

router.post("/register", registerMiddleware, userControllers.register)
router.post("/login", loginMiddleware, userControllers.login)
router.post("/editProfile", editProfileMiddleware, userControllers.editProfile)
router.post("/createAdress", createAdressMiddleware, userControllers.createAdress)

module.exports = router