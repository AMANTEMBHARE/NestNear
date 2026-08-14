const express = require("express");
const authenticate = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/authorization.middleware");

const router = express.Router();

router.get("/users/profile", authenticate, (req, res) => {
    res.json({
        success: true,
        message: "You are authenticated",
        user: req.user
    });
});

router.get("/users/owner-area", authenticate, authorizeRoles("owner"), (req, res) => {
    res.json({
        success: true,
        message: "welcome to the PG owner area",
        user: req.user
    });
});

module.exports = router;