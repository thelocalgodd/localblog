const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcrypt");

const { userLogin, userSignup } = require("../controllers/authController");
const authCheck = require("../middleware/authCheck");

router.get("/", (req, res) => {
  res.json({
    message: "Auth Route",
  });
});

router.post("/login", userLogin);
router.post("/signup", userSignup);

module.exports = router;
