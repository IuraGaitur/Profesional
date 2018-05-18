import UserService from '../../data/api/UserApi';
import StatusCode from "./../../utils/StatusCode";
export const REQUEST_RESET = 'REQUEST_RESET';
export const RESET_FAIL = 'RESET_FAIL';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const NETWORK_ERROR = 'NETWORK_ERROR';

function requestReset() {
    return {
        type: REQUEST_RESET
    }
}

function successReset(message) {
    return {
        message: message,
        type: RESET_SUCCESS
    }
}

function errorReset(errorMessage) {
    return {
        error: errorMessage,
        type: RESET_FAIL
    }
}

function errorNetwork() {
    return {
        type: NETWORK_ERROR
    }
}

export function resetPassword(email, newPass) {
    return async (dispatch) => {
        console.log("Show loading");
        dispatch(requestReset());

        let response = await new UserService().instance().resetPass(email, newPass);
        if (response && response.status == StatusCode.OK) {
            console.log("Success");
            return dispatch(successReset("Reset with success"));
        }else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorReset(response.error))
        } else {
            return dispatch(errorNetwork());
        }
    }
}
