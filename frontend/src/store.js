import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import blogsReducer from "./slices/BlogsSlice";
import blogReducer from "./slices/BlogSlice";



const reducer = combineReducers({
    blogsState:blogsReducer,
    blogState:blogReducer


})


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})

export default store;
