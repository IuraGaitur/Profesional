import {INIT, REGISTER, SUCCESS, FAIL, NETWORK_ERROR} from 'src/app/actions';

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
        case REGISTER:
            return {...state, showLoading: true, networkError: false};
        case SUCCESS:
            return {...state, user: action.userResponse, showLoading: false, errorMessage: null, networkError: false};
        case FAIL:
            return {...state, errorMessage: action.error, user: null, showLoading: false, networkError: false};
        case NETWORK_ERROR:
            return {...state, errorMessage: action.error, user: null, showLoading: false, networkError: true};
        default:
            return state;
    }
}