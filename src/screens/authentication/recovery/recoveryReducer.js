import {REQUEST_RESET, SUCCESS, FAIL, NETWORK_ERROR} from 'src/app/actions';

const defaultState = {
    successMessage : ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case REQUEST_RESET:
            return {...state, showLoading: true, networkError: false};
        case SUCCESS:
            return {...state, successMessage: action.message, showLoading: false, errorMessage: null, networkError: false};
        case FAIL:
            return {...state, errorMessage: action.error, successMessage: null, showLoading: false, networkError: false};
        case NETWORK_ERROR:
            return {...state, errorMessage: action.error, successMessage: null, showLoading: false, networkError: true};
        default:
            return state;
    }
}