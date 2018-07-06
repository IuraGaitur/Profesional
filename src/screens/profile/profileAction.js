import UserApi from 'src/data/api/UserApi';
import CountryApi from 'src/data/api/CountryApi';
import UserDao from 'src/data/database/UserDao';
import StatusCode from 'src/utils/StatusCode';
import {Actions} from 'react-native-router-flux';
import {INIT, SHOW_LOADING, NETWORK_ERROR, SUCCESS, FAIL, GET_PRIMARY_USER} from 'src/app/actions';


export const init = () => {
    return async (dispatch) => {
        let countries = await new CountryApi().instance().getAll();
        return dispatch(getCountries(countries));
    }
};


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

export const getPrimaryUser = () => {
    return async (dispatch) => {
        let user = await new UserDao().getPrimaryUser();
        return dispatch(sendUser(user));
    }
};

function sendUser(user) {
    return {user: user, type: GET_PRIMARY_USER};
}

function getCountries(countries) {
    return {type: INIT, countries: countries}
}

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