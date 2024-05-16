import { clearError, loginFail, loginRequest, loginSuccess, registerFail, registerRequest, registerSuccess } from "../slices/AuthSlice";
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {

    try {
        dispatch(loginRequest())
        const { data }  = await axios.post(`/api/sh/login`,{email,password});
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    }

}


export const clearAuthError=(dispatch)=>{
    dispatch(clearError())

}



export const register = (userData) => async (dispatch) => {

    

    try {
        dispatch(registerRequest())

        const config = {
            headers:{
            "Content-type":"multipart/form-data"
        }
    }

        const { data }  = await axios.post(`/api/sh/registr`,userData,config);
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }

}