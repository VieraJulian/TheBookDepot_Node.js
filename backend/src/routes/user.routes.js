const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/user.controllers")

const registerMiddleware = require("../middlewares/register.middleware")
const loginMiddleware = require("../middlewares/login.middleware");
const editProfileMiddleware = require("../middlewares/editProfile.middleware")
const createAdressMiddleware = require("../middlewares/createAddress.middleware")
const editAddressMiddleware = require("../middlewares/editAddress.middleware")

const { verifyToken } = require('../middlewares/verifyToken.middleware')

router.post("/register", registerMiddleware, userControllers.register)
router.post("/login", loginMiddleware, userControllers.login)
router.post("/profile/edit", editProfileMiddleware, userControllers.editProfile)
router.post("/addresses/create", createAdressMiddleware, userControllers.createAdress)
router.post("/addresses/edit", editAddressMiddleware, userControllers.editAddress)
router.post("/addresses/delete", verifyToken, userControllers.deleteAddress)
router.get("/:id/profile", verifyToken, userControllers.profile)
router.get("/:id/addresses", verifyToken, userControllers.addresses)
router.get("/:id/orders", verifyToken, userControllers.orders)

module.exports = router