const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/user.controllers")

const registerMiddleware = require("../middlewares/register.middleware")
const loginMiddleware = require("../middlewares/login.middleware");
const editProfileMiddleware = require("../middlewares/editProfile.middleware")
const createAdressMiddleware = require("../middlewares/createAddress.middleware")
const editAddressMiddleware = require("../middlewares/editAddress.middleware")

router.post("/register", registerMiddleware, userControllers.register)
router.post("/login", loginMiddleware, userControllers.login)
router.post("/editProfile", editProfileMiddleware, userControllers.editProfile)
router.post("/createAddress", createAdressMiddleware, userControllers.createAdress)
router.post("/editAddress", editAddressMiddleware, userControllers.editAddress)
router.get("/profile/:id", userControllers.profile)
router.get("/addresses/:id", userControllers.addresses)

module.exports = router