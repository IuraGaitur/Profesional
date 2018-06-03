import {REQUEST_REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, INIT, ERROR, NETWORK_ERROR} from './contactAction';

const defaultState = {
    countries: [],
    networkError: false,
    showLoading: false,
    user: null
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INIT:
            return {...state, countries: action.countries, networkError: false};
        case REQUEST_REGISTER:
            return {...state, showLoading: true, networkError: false};
        case REGISTER_SUCCESS:
            return {...state, user: action.userResponse, showLoading: false, errorMessage: null, networkError: false};
        case REGISTER_FAIL:
            return {...state, errorMessage: action.error, user: null, showLoading: false, networkError: false};
        case NETWORK_ERROR:
            return {...state, errorMessage: action.error, user: null, showLoading: false, networkError: true};
        default:
            return state;
    }
}