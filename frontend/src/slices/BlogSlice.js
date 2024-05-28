import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({
    name: 'blogDetail',
    initialState: {
        loading: true,
        btnDisable:false,
        blog:{}
    },
    reducers: {
        blogRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        blogSuccess(state, action){
            return {
                ...state,
                loading: false,
                blog: action.payload.blog,
                
            }
        },
        blogFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },

        createBlogRequest(state, action){
            return {
                ...state,
                loading:true,
                btnDisable:true
            }
        },
        createBlogSuccess(state, action){
            return {
                ...state,
                loading: false,
                blog: action.payload.blog,
                btnDisable:false,
                isBlogCreated:true
                
            }
        },
        createBlogFail(state, action){
            return {
                ...state,
                loading: false,
                btnDisable:false,
                error:  action.payload
                
            }
        },
        clearCreatedBlog(state, action){
            return {
                ...state,
                loading: false,
                isBlogCreated:false
            }
        },
        clearError(state, action){
            return {
                ...state,
                error: null
            }
        }
       
    }
});

const { actions, reducer } = blogSlice;

export const { 
    blogRequest, 
    blogSuccess, 
    blogFail,

    createBlogRequest,
    createBlogSuccess,
    createBlogFail,
    
    clearError,
    clearCreatedBlog

} = actions;

export default reducer;