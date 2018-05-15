import {REQUEST_REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, INIT, ERROR} from './registerAction';

const defaultState = {
    countries: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INIT:
            return {...state, countries: action.countries};
        case REQUEST_REGISTER:
            return {...state, showLoading: true};
        case REGISTER_SUCCESS:
            return {...state, error: null, user: action.user, showLoading: false};
        case REGISTER_FAIL:
            return {...state, error: action.errorType, errorMessage: errorMessage, user: null, showLoading: false};
        default:
            return state;
    }
}