const express = require("express");
const pgController = require("../controllers/pg.controller");
const authenticate = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/authorization.middleware");

const router = express.Router();

router.post("/pgs", authenticate, authorizeRoles("owner"), pgController.createPG);
router.get("/pgs", pgController.getPGs);
router.get("/pgs/:id", pgController.getPGById);
router.put("/pgs/:id", authenticate, authorizeRoles("owner"), pgController.updatePG);
router.delete("/pgs/:id", authenticate, authorizeRoles("owner"), pgController.deletePG);




module.exports = router;