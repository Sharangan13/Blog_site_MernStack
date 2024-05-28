import axios from 'axios';
import { adminGetUsersDetailsFail, adminGetUsersDetailsRequest, adminGetUsersDetailsSuccess } from "../slices/UsersSlice";

export const adminGetUsersDetails = (keyword, id) => async (dispatch) => {
    // Construct the API endpoint URL
    let link = '/api/sh/admin/users';
    if (keyword) {
        link += `?&keyword=${keyword}`;
    }

    try {
        dispatch(adminGetUsersDetailsRequest());

        // Make the API request
        const response = await axios.get(link);

        // Check if response data exists
        if (response && response.data) {
            dispatch(adminGetUsersDetailsSuccess(response.data));
        } else {
            // If there's no data, dispatch a fail action with an appropriate message
            dispatch(adminGetUsersDetailsFail("No data found"));
        }
    } catch (error) {
        // Handle any errors, including those without a response object
        const errorMessage = error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : error.message || "An unexpected error occurred";
        dispatch(adminGetUsersDetailsFail(errorMessage));
    }
};
