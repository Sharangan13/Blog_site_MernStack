import axios from 'axios';
import { blogFail, blogRequest, blogSuccess } from '../slices/BlogSlice';


export const getblog = (id) => async (dispatch) => {

    try {  
        dispatch(blogRequest()) 
        const { data }  =  await axios.get(`/api/sh/blog/${id}`);
        dispatch(blogSuccess(data))
    } catch (error) {
        
        dispatch(blogFail(error.response.data.message))
    }
    
}