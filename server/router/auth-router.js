const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth_controllers")
const {signUpSchema,loginSchema} = require("../validator/auth-validator")
const validate = require("../middleware/validate-middleware")

router.route("/").get(authControllers.home)
router.route("/register").post(validate(signUpSchema),authControllers.register)
router.route("/login").post(validate(loginSchema),authControllers.login)
module.exports = router;