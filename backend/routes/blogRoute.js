const express = require('express');
const { getBlogs, createNewBlog, getSingleBlog, updateBlog, deleteBlog, myBlogs } = require('../controllers/blogController');
const router = express.Router();
const {isAuthendicatedUser,authorizeRole}= require("../middlewares/authendicate")



router.route('/blog').get(getBlogs);

router.route('/blog/new').post(isAuthendicatedUser,authorizeRole('user'),createNewBlog);  // only Authendicated user can create a new blog

router.route('/blog/:id')
.get(getSingleBlog)
.put(updateBlog)
.delete(deleteBlog);

router.route('/myblogs').get(isAuthendicatedUser,myBlogs)



module.exports = router;

