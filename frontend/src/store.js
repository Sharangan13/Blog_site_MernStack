import { Tuple, combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import blogsReducer from "./slices/BlogsSlice";
import blogReducer from "./slices/BlogSlice";
import authReducer from "./slices/AuthSlice";



const reducer = combineReducers({
    blogsState:blogsReducer,
    blogState:blogReducer,
    authState:authReducer


})


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store;
