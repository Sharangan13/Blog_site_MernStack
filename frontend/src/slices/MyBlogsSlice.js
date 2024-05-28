import { createSlice } from "@reduxjs/toolkit";


const myBlogsSlice = createSlice({
    name: 'myBlogs',
    initialState: {
        loading: false,
        myBlogs:{}
    },
    reducers: {
        
        myBlogsRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        myBlogsSuccess(state, action){
            return {
                ...state,
                loading: false,
                myBlogs: action.payload.myBlogs,
                
            }
        },
        myBlogsFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
       
    }
});

const { actions, reducer } = myBlogsSlice;

export const { 
    myBlogsRequest,
    myBlogsSuccess,
    myBlogsFail

} = actions;

export default reducer;