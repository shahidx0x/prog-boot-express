const express = require("express");
const eventsController = require("../controllers/events_controller");
const authMiddleware = require("../middleware/auth_middleware");

const router = express.Router();

router.get("/", eventsController.getAllBootcamps);
router.get("/:id", eventsController.getBootcampById);
router.post("/", authMiddleware, eventsController.createBootcamp);

module.exports = router;
