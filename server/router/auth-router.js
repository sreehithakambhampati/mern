const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth_controllers")

router.route("/").get(authControllers.home)
router.route("/register").post(authControllers.register)
module.exports = router;