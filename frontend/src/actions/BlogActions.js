import axios from 'axios';
import { blogFail, blogRequest, blogSuccess, createBlogFail, createBlogRequest, createBlogSuccess } from '../slices/BlogSlice';


export const getblog = (id) => async (dispatch) => {

    try {  
        dispatch(blogRequest()) 
        const { data }  =  await axios.get(`/api/sh/blog/${id}`);
        dispatch(blogSuccess(data))
    } catch (error) {
        
        dispatch(blogFail(error.response.data.message))
    }
    
}



export const createNewBlog = blogData => async (dispatch) => {

    try {  
        dispatch(createBlogRequest()) 
        const { data }  =  await axios.post(`/api/sh/blog/new`,blogData);
        dispatch(createBlogSuccess(data))
    } catch (error) {
        
        dispatch(createBlogFail(error.response.data.message))
    }
    
}