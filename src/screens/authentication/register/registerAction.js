import UserService from 'src/data/api/userApi';
import UserDao from 'src/data/database/userDao';
import StatusCode from 'src/utils/statusCode';
import Constants from 'src/utils/constants';
import { Actions } from 'react-native-router-flux';
import {REGISTER, SUCCESS, FAIL, NETWORK_ERROR, NO_ACTION} from 'src/app/actions';



function requestRegister() {
    return {
        type: REGISTER
    }
}

function successRegister(userResponse) {
    Actions.main();
    return {
        userResponse: userResponse,
        type: SUCCESS
    }
}

function errorRegister(errorMessage) {
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

export const registerRequest = (user) => {
    return async (dispatch) => {
        dispatch(requestRegister());
        let response = await new UserService().instance().register(user);
        if (response && response.status == StatusCode.OK) {
            await new UserDao().savePrimaryUser(response.user);
            Actions.main();
            return dispatch(successRegister(response.user));
        } else if (response && response.status == StatusCode.INVALID_USER) {
            return dispatch(errorRegister(response.errorMsg))
        } else {
            return dispatch(errorNetwork())
        }
    }
};

export const showInfo = () => {
    Actions.info();
    return {type: NO_ACTION};
};

export const goBack = () => {
    Actions.pop();
    return {type: NO_ACTION};
};

export const showCookieInfo = () => {
    Actions.about({url: Constants.urlCookie, title: '<b>Cookie Policy</b>'});
    return {type: NO_ACTION};
};

export const showPrivacyInfo = () => {
    Actions.about({url: Constants.urlPrivacy, title: '<b>Privacy Info</b>'});
    return {type: NO_ACTION};
};