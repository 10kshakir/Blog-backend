const router =require("express").Router();

const blogController =require("../controllers/blogController.js");

router.get("/blogs",blogController.getAllBlog);

router.post("/create-blog",blogController.creatBlog);

router.get("/single-blog/:id",blogController.getSingleBlog);

router.get("/blog-title/:title",blogController.blogByTitle);


router.delete("/delete-blog/:id",blogController.deleteBlog);

router.post("/update-blog/:id",blogController.updateBlog);
module.exports=router;