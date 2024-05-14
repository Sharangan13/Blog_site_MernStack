import axios from 'axios';
import { blogsFail, blogsRequest, blogsSuccess } from '../slices/BlogsSlice';


export const getBlogs = id => async (dispatch) => {

    try {  
        dispatch(blogsRequest()) 
        const { data }  =  await axios.get('/api/sh/blog');
        dispatch(blogsSuccess(data))
    } catch (error) {
        
        dispatch(blogsFail(error.response.data.message))
    }
    
}