import {SHOW_LOADING, UPDATE_SUCCESS, UPDATE_FAIL, INIT,
        ERROR, NETWORK_ERROR, GET_PRIMARY_USER, GET_MENU_ITEMS} from './profileAction';
import User from "../../data/models/User";

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
        case UPDATE_SUCCESS:
            return {...state, user: action.userResponse, showLoading: false, errorMessage: null, networkError: false,
                successMessage: "Saved with success"};
        case GET_MENU_ITEMS:
            return {...state, menuItems: action.items};
        case UPDATE_FAIL:
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