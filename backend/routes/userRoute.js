const {
  getAllUsers,
  getUserByUsername,
  createUser,
  updateUser,
  deleteUser,
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
router.post("/user", createUser);
router.put("/user/:id", authCheck, updateUser);
router.delete("/user/:id", authCheck, deleteUser);

module.exports = router;
