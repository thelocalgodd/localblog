const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
  const response = postModel.find({});

  try {
    if (response.length === 0) {
      return res.status(400).json({
        message: "No Posts Found",
      });
    }

    return res.status(200).json({
      message: "Posts Found",
      response,
    });
  } catch (e) {
    console.error(e);
  }
};

const getPostByAuthorName = async (req, res) => {
  const { author } = req.params;

  try {
    const response = await postModel.find({
      author: author,
    });

    if (response.length === 0) {
      return res.status(404).json({
        message: "Post Not Found",
        author: author,
      });
    }

    return res.status(200).json({
      response,
    });
  } catch (error) {
    console.erro(error);
  }
};

const getPostsByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const response = await postModel.find({ tags: tag });
    if (response.length === 0) {
      return res.status(404).json({
        message: "No posts found with this tag",
        tag: tag,
      });
    }
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = new postModel(req.body);
    const response = await post.save();
    return res.status(201).json({
      message: "Post created successfully",
      response,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const response = await postModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!response) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const response = await postModel.findByIdAndDelete(req.params.id);
    if (!response) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostByAuthorName,
  getPostsByTag,
  createPost,
  updatePost,
  deletePost,
};
