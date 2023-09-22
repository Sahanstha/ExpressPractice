const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Gets back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Gets back all the posts
router.post("/calc", async (req, res) => {
  try {
  } catch (err) {
    res.json({ message: err });
  }
});
//Submits a Posts
router.post("/", async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
    });
    console.log("Creating Post");
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
//Delete Post
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});
//Update
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { description: req.body.description } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
