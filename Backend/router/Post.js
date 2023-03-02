const router = require("express").Router();
const Post = require("../Modals/Post");
const { verifyToken } = require("./verifytoken");

// Create Post
router.post("/user/post", verifyToken, async (req, res) => {
  try {
    let { title, image, video } = req.body;
    let newpost = new Post({
      title,
      image,
      video,
      user: req.user.id,
    });
    const post = await newpost.save();
    res.status(200).json(post);
  } catch (error) {
    return res.status(500).json("intrnal error occured");
  }
});
//upload post by one user
router.get("/get/post/", verifyToken, async (req, res) => {
  try {
    const mypost = await Post.find({ user: req.user.id });
    if (!mypost) {
      return res.status(400).json("You Don't have any post");
    }
    res.status(200).json(mypost);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});
//Update user post
router.put("/update/post/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).json("Post Does not found");
    }
    post = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    let updatepost = await post.save();
    res.status(200).json(updatepost);
  } catch (error) {
    return res.status(500).json("Internal error occured");
  }
});

//Like
router.put("/:id/like", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.like.includes(req.body.user)) {
      if (post.dislike.includes(req.body.user)) {
        await post.updateOne({ $pull: { dislike: req.body.user } });
      }
      await post.updateOne({ $push: { like: req.body.user } });
      return res.status(200).json("Post has been liked ");
    } else {
      await post.updateOne({ $pull: { like: req.body.user } });
      return res.status(200).json("Post has been unlike");
    }
  } catch (error) {
    return res.status(500).json("Internal Server error");
  }
});
// Dislike
router.put("/:id/dislike", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.dislike.includes(req.body.user)) {
      if (post.like.includes(req.body.user)) {
        await post.updateOne({ $pull: { like: req.body.user } });
      }
      await post.updateOne({ $push: { dislike: req.body.user } });
      return res.status(200).json("Post has been disliked ");
    } else {
      await post.updateOne({ $pull: { dislike: req.body.user } });
      return res.status(200).json("Post has been undishlike");
    }
  } catch (error) {
    return res.status(500).json("internal server error");
  }
});

//Comment
router.put("/id/comment", verifyToken, async (req, res) => {
  try {
    const { comment, postid } = req.body;
    const comments = {
      user: req.user.id,
      username: req.user.username,
      comment,
    };
    const post = await Post.findById(postid);
    post.comments.push(comments);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    return res.status(500).json("Intrnal server error");
  }
});

module.exports = router;
