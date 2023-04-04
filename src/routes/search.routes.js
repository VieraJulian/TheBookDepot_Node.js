const { Router } = require("express")
const router = Router()

const searchControllers = require("../controllers/search.Controllers")

router.get("/", searchControllers.search)

module.exports = router