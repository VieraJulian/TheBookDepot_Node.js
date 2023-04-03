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
router.post("/profile/edit", editProfileMiddleware, userControllers.editProfile)
router.post("/addresses/create", createAdressMiddleware, userControllers.createAdress)
router.post("/addresses/edit", editAddressMiddleware, userControllers.editAddress)
router.post("/addresses/delete", userControllers.deleteAddress)
router.get("/:id/profile", userControllers.profile)
router.get("/:id/addresses", userControllers.addresses)
router.get("/:id/orders", userControllers.orders)

module.exports = router