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

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { ...updates, updatedAt: Date.now() },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser,
  updateUser,
  deleteUser,
};
