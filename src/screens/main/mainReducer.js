import {GET_MENU_ITEMS, SIGN_OUT} from './mainAction';
import User from "../../data/models/User";

const defaultState = {
    user: new User()
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_MENU_ITEMS:
            return {...state, menuItems: action.items};
        case SIGN_OUT:
            return {...state}
        default:
            return state;
    }
}