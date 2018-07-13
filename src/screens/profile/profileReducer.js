import {INIT, SHOW_LOADING, GET_MENU_ITEMS, NETWORK_ERROR, SUCCESS, FAIL, GET_PRIMARY_USER} from 'src/app/actions';
import User from 'src/data/models/user';

const defaultState = {
    countries: [],
    networkError: false,
    showLoading: false,
    user: new User()
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INIT:
            return {...state, countries: action.countries, networkError: false};
        case SHOW_LOADING:
            return {...state, showLoading: true, networkError: false, successMessage: null};
        case SUCCESS:
            return {...state, user: action.userResponse, showLoading: false, errorMessage: null, networkError: false,
                successMessage: 'Saved with success'};
        case GET_MENU_ITEMS:
            return {...state, menuItems: action.items};
        case FAIL:
            return {...state, errorMessage: action.error, user: null, showLoading: false, networkError: false,
                successMessage: null};
        case GET_PRIMARY_USER:
            return {...state, user: action.user, successMessage: null};
        case NETWORK_ERROR:
            return {...state, errorMessage: action.error, user: null, showLoading: false, networkError: true, successMessage: null};
        default:
            return state;
    }
}