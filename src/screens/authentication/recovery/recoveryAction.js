import UserService from 'src/data/api/userApi';
import StatusCode from 'src/utils/statusCode';
import {RESET, FAIL, SUCCESS, NETWORK_ERROR} from 'src/app/actions';

function requestReset() {
    return {
        type: RESET
    }
}

function successReset(message) {
    return {
        message: message,
        type: SUCCESS
    }
}

function errorReset(errorMessage) {
    return {
        error: errorMessage,
        type: FAIL
    }
}

function errorNetwork() {
    return {
        type: NETWORK_ERROR
    }
}

export function resetPassword(email, newPass) {
    return async (dispatch) => {
        dispatch(requestReset());

        let response = await new UserService().instance().resetPass(email, newPass);
        if (response && response.status == StatusCode.OK) {
            return dispatch(successReset('Reset with success'));
        }else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorReset('Cannot reset user with this email'))
        } else {
            return dispatch(errorNetwork());
        }
    }
}
