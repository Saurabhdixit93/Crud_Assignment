// creating router
const router = require("express").Router();

// importing controllers
const {
  GetAllPosts,
  GetSpecificPostById,
  AddCommentSpecificPostById,
  AddLikeSpecificPostById,
  NewPost,
  DeleteSpecificPostById,
  UpdateSpecificPostById,
} = require("../controllers/PostController");

// using routes for add post API
router.post("/add-post", NewPost);
// using routes for Get All posts API
router.get("/get-posts", GetAllPosts);
// using routes for Get Specific post by postId API
router.get("/get-post/:postId", GetSpecificPostById);
// using routes for Update Specific post by postId API
router.put("/update-post/:postId", UpdateSpecificPostById);
// using routes for delete Specific post by postId API
router.delete("/delete-post/:postId", DeleteSpecificPostById);
// using routes for Add Like In Specific post by postId API
router.post("/posts/:postId/add-like", AddLikeSpecificPostById);
// using routes for Add Comment in Specific post by postId API
router.post("/posts/:postId/add-comment", AddCommentSpecificPostById);

module.exports = router;
