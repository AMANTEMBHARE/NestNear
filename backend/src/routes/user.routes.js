const express = require("express");
const authenticate = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/users/profile", authenticate, (req, res) => {
    res.json({
        success: true,
        message: "You are authenticated",
        user: req.user
    });
});

module.exports = router;