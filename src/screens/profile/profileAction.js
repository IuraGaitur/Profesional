import UserApi from 'src/data/api/userApi';
import UserDao from 'src/data/database/userDao';
import StatusCode from 'src/utils/statusCode';
import {Actions} from 'react-native-router-flux';
import {SHOW_LOADING, NETWORK_ERROR, SUCCESS, FAIL} from 'src/app/actions';

function showLoading() {
    return {type: SHOW_LOADING}
}

export const saveRequest = (user) => {
    return async (dispatch) => {
        dispatch(showLoading());

        let response = await new UserApi().instance().updatePrimaryUser(user);
        if (response && response.status == StatusCode.OK) {
            await new UserDao().savePrimaryUser(response.user);
            return dispatch(successUpdate(response.user));
        } else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorRegister(response.errorMsg))
        } else {
            return dispatch(errorNetwork())
        }
    }
};

function successUpdate(userResponse) {
    Actions.main();
    return {userResponse: userResponse, type: SUCCESS}
}

function errorRegister(errorMessage) {
    return {error: errorMessage, type: FAIL}
}

function errorNetwork() {
    return {type: NETWORK_ERROR}
}