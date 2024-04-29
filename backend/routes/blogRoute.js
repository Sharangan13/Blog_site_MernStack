const express = require('express');
const { getBlogs, createNewBlog, getSingleBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();



router.route('/blog').get(getBlogs);

router.route('/blog/new').post(createNewBlog);

router.route('/blog/:id').get(getSingleBlog).put(updateBlog).delete(deleteBlog);

module.exports = router;