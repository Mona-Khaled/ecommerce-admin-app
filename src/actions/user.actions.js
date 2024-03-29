import axios from "../helpers/axios";
import { userConstants } from "./constants";



export const signup = (user) => {

    return async (dispatch) => { //async --> so we can perform an API calls within this function

        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post('/admin/signup', {
            ...user
        });

        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: { message }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}

