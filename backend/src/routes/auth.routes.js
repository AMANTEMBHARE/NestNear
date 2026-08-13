const express = require("express");
const authController = require("../controllers/auth.controller");
const { validateRegister } = require("../middleware/validation.middleware");

const router = express.Router();

router.post("/auth/register", validateRegister, authController.register);
router.post("/auth/login", authController.login);


module.exports = router;