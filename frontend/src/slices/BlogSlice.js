import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        loading: false
    },
    reducers: {
        blogRequest(state, action){
            return {
                loading: true
            }
        },
        blogSuccess(state, action){
            return {
                loading: false,
                blog: action.payload.blog,
                
            }
        },
        blogFail(state, action){
            return {
                loading: false,
                error:  action.payload
            }
        }
       
    }
});

const { actions, reducer } = blogSlice;

export const { 
    blogRequest, 
    blogSuccess, 
    blogFail

} = actions;

export default reducer;