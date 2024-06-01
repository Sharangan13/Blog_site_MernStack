import axios from 'axios';
import { adminDeleteUserFail, adminDeleteUserSuccess, adminGetUsersDetailsFail, adminGetUsersDetailsRequest, adminGetUsersDetailsSuccess } from "../slices/UsersSlice";

export const adminGetUsersDetails = (keyword, id) => async (dispatch) => {

    let link = '/api/sh/admin/users';
    if (keyword) {
        link += `?&keyword=${keyword}`;
    }

    try {

        dispatch(adminGetUsersDetailsRequest());
        const {data} = await axios.get(link);

        dispatch(adminGetUsersDetailsSuccess(data));
       
    } catch (error) {
        
        dispatch(adminGetUsersDetailsFail(error.response.data.message));
    }
};

export const AdminDeleteUser = id => async (dispatch) => {

    try {  
        dispatch(adminGetUsersDetailsRequest()) 
        await axios.delete(`/api/sh/admin/user/${id}`);
        dispatch(adminDeleteUserSuccess())
    } catch (error) {
        dispatch(adminDeleteUserFail(error.response.data.message))
    }
    
}
