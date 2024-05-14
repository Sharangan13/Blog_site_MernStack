import { createSlice } from "@reduxjs/toolkit";


const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        loading: false
    },
    reducers: {
        blogsRequest(state, action){
            return {
                loading: true
            }
        },
        blogsSuccess(state, action){
            return {
                loading: false,
                blogs: action.payload.blogs,
                
            }
        },
        blogsFail(state, action){
            return {
                loading: false,
                error:  action.payload
            }
        }
       
    }
});

const { actions, reducer } = blogsSlice;

export const { 
    blogsRequest, 
    blogsSuccess, 
    blogsFail

} = actions;

export default reducer;