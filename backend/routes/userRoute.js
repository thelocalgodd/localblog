const {
  getAllUsers,
  getUserByUsername,
} = require("../controllers/userController");
const authCheck = require("../middleware/authCheck");

const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "User Route",
  });
});

router.get("/users", getAllUsers);
router.get("/user/:username", authCheck, getUserByUsername);

module.exports = router;
