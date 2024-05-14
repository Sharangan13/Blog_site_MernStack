import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import blogsReducer from "./slices/BlogsSlice";



const reducer = combineReducers({
    blogsState:blogsReducer


})


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
})

export default store;
