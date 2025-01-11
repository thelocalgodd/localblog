const {
  getAllPosts,
  getPostByAuthorName,
  getPostsByTag,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const authCheck = require("../middleware/authCheck");

const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Post Route",
  });
});

router.get("/posts", authCheck, getAllPosts);
router.get("/post/:author", authCheck, getPostByAuthorName);
router.get("/posts/tag/:tag", authCheck, getPostsByTag);
router.post("/post", authCheck, createPost);
router.put("/post/:id", authCheck, updatePost);
router.delete("/post/:id", authCheck, deletePost);

module.exports = router;
