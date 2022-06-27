const router = require("express").Router()
const { validate } = require("../../validations/validate");
const { tokenVerifier } = require("../../utils")
const { checkSchema } = require('express-validator');

const { userRegistration, validateEmail, userLogin, passwordReset } = require("../../validations/userValidations/user");
const { addFunds } = require("../../validations/userValidations/wallet");

const { userRegistrationController, verifyEmailController, userLoginController, passwordResetRequestController,
      resetPasswordController, fundWalletController } = require("../../controllers/userController");

router.post("/register", validate(checkSchema(userRegistration)), userRegistrationController)
router.post("/verify-email", validate(checkSchema(validateEmail)), verifyEmailController)
router.post("/login", validate(checkSchema(userLogin)), userLoginController)
router.post("/password-reset-request", passwordResetRequestController)
router.post("/reset-password", validate(checkSchema(passwordReset)), resetPasswordController)

router.put("/wallet/:userId/recharge", validate(checkSchema(addFunds)), fundWalletController)

module.exports = router