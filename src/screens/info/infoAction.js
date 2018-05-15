import UserService from '../../data/api/UserApi';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function requestLogin() {
    return {
        type: REQUEST_LOGIN
    }
}

function successLogin(userResponse) {
    return {
        userResponse: userResponse,
        type: LOGIN_SUCCESS
    }
}

function errorLogin(errorMessage) {
    return {
        error: errorMessage,
        type: LOGIN_FAIL
    }
}

export function loginRequest(email, pass) {
    return async (dispatch) => {
        dispatch(requestLogin());
        setTimeout(async function () {
            let response = await new UserService().instance().login(email, pass);
            if (response && response.success) {
                return dispatch(successLogin(response.user));
            }
            return dispatch(errorLogin(response.error))
        }, 2000)

    }
}