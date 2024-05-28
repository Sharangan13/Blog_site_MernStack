import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: 'usersDetail',
    initialState: {
        loading: true,
        users:{}
    },
    reducers: {
        adminGetUsersDetailsRequest(state, action){
            return {
                loading: true
            }
        },
        adminGetUsersDetailsSuccess(state, action){
            return {
                loading: false,
                users: action.payload.users,
                
            }
        },
        adminGetUsersDetailsFail(state, action){
            return {
                loading: false,
                error:  action.payload
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

const { actions, reducer } = usersSlice;

export const { 
    adminGetUsersDetailsRequest,
    adminGetUsersDetailsSuccess,
    adminGetUsersDetailsFail,
    clearError

} = actions;

export default reducer;