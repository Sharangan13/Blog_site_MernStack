const express = require('express');
const { getBlogs, createNewBlog, getSingleBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();
const {isAuthendicatedUser,authorizeRole}= require("../middlewares/authendicate")



router.route('/blog').get(getBlogs);

router.route('/blog/new').post(isAuthendicatedUser,authorizeRole('user'),createNewBlog);  // only Authendicated user can create a new blog

router.route('/blog/:id')
.get(getSingleBlog)
.put(updateBlog)
.delete(deleteBlog);



module.exports = router;

