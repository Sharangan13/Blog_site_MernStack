const blogModel = require("../models/blogModel");

//Get all blogs URL = http://localhost:8000/api/sh/blog
exports.getBlogs = async (req, res, next) => {
  const blogs = await blogModel.find();
  res.status(200).json({
    sucess: true,
    count: blogs.length,
    blogs,
  });
};

//Create New Blog  URL = http://localhost:8000/api/sh/blog/new

exports.createNewBlog = async (req, res, next) => {
  const blog = await blogModel.create(req.body);
  res.status(201).json({
    sucess: true,
    blog,
  });
};

//Get signgle Blog URL = http://localhost:8000/api/sh/blog/:id

exports.getSingleBlog = async (req, res, next) => {
  try {
    const blog = await blogModel.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error(error);
    console.log("-----------------------------------------");
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



// Update Blog URL = http://localhost:8000/api/sh/blog/:id

exports.updateBlog = async (req, res, next) => {
  let blog = await blogModel.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog = await blogModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      sucess: true,
      blog
    });
  
};


//Delete Blog URL = http://localhost:8000/api/sh/blog/:id

exports.deleteBlog = async (req,res,next)=>{
    
        let blog = await blogModel.findById(req.params.id);
      
          if (!blog) {
            return res.status(404).json({
              success: false,
              message: "Blog not found",
            });
          }

        await blogModel.findByIdAndDelete(req.params.id)
      
          res.status(200).json({
            sucess: true,
            message:"Delete Sucessfully"
          });
}


