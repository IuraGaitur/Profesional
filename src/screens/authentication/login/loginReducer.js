import {LOGIN, FAIL, SUCCESS, EMAIL_FAIL, PASS_FAIL, NETWORK_ERROR} from 'src/app/actions';
import User from 'src/data/models/User';

const defaultState = {
    isLoggedIn: false,
    user: new User(),
    emailError: null,
    passError: null,
    showLoading: false,
    networkError: false,
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                emailError: null,
                passError: null,
                showLoading: true,
                networkError: false,
                isLoggedIn: false
            };
        case EMAIL_FAIL:
            return {...state,
                emailError: action.error,
                passError: null,
                showLoading: false,
                networkError: false,
                isLoggedIn: false
            };
        case PASS_FAIL:
        case FAIL:
            return {...state,
                emailError: null,
                passError: action.error,
                showLoading: false,
                networkError: false,
                isLoggedIn: false
            };
        case SUCCESS:
            return {
                ...state,
                user: action.userResponse,
                emailError: null,
                passError: null,
                showLoading: false,
                networkError: false,
                isLoggedIn: true
            };
        case NETWORK_ERROR:
            return {
                ...state,
                emailError: null,
                passError: null,
                showLoading: false,
                networkError: true,
                isLoggedIn: false
            };
        default:
            return state;
    }
}