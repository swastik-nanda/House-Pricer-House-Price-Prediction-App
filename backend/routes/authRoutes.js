const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authenticatedMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/home", authMiddleware, (req, res) => {
  res.json({ message: `Welcome to the dashboard, user ${req.user.email}` });
});

module.exports = router;
