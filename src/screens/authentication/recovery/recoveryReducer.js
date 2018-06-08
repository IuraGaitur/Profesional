import {REQUEST_RESET, RESET_SUCCESS, RESET_FAIL, NETWORK_ERROR} from './recoveryAction';

const defaultState = {
    successMessage : ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_RESET:
            return {...state, showLoading: true, networkError: false};
        case RESET_SUCCESS:
            return {...state, successMessage: action.message, showLoading: false, errorMessage: null, networkError: false};
        case RESET_FAIL:
            return {...state, errorMessage: action.error, successMessage: null, showLoading: false, networkError: false};
        case NETWORK_ERROR:
            return {...state, errorMessage: action.error, successMessage: null, showLoading: false, networkError: true};
        default:
            return state;
    }
}