const express = require("express");
const userController = require("../controllers/user_controller");
const authMiddleware = require("../middleware/auth_middleware");

const router = express.Router();

router.get("/", authMiddleware, userController.getUsers);
router.get("/:id", authMiddleware, userController.getUserById);

module.exports = router;
