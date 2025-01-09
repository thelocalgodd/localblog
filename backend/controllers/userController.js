const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const response = await User.find({});

    if (response.length == 0) {
      return res.status(404).json({
        message: "No Users Found",
      });
    }

    return res.status(200).json({
      message: "Users found",
      response,
    });
  } catch (err) {
    console.error(err);
  }
};

const getUserByUsername = async (req, res) => {
  const { username } = req.params;

  if (!username) {
    return res.json({
      message: "Username is required",
    });
  }

  try {
    const response = await User.find({
      username: username,
    });

    if (!response || response.length == 0) {
      return res.status(404).json({
        message: `User ${username} not found`,
      });
    }

    return res.status(200).json({
      message: "User found",
      response,
    });
  } catch (err) {
    console.error("Error Occured", err);
  }
};

module.exports = { getAllUsers, getUserByUsername };
