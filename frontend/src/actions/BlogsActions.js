import axios from 'axios';
import { blogsFail, blogsRequest, blogsSuccess } from '../slices/BlogsSlice';


export const getBlogs = (keyword,id) => async (dispatch) => {

    let link ='/api/sh/blog'
    if(keyword){
        link += `?&keyword=${keyword}`
    }

    try {  
        dispatch(blogsRequest()) 
        const { data }  =  await axios.get(link);
        dispatch(blogsSuccess(data))
    } catch (error) {
        
        dispatch(blogsFail(error.response.data.message))
    }
    
}