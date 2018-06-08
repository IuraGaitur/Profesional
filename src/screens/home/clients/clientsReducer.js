import {GET_MENU_ITEMS, GET_PRIMARY_USER, SIGN_OUT} from './clientsAction';
import User from "../../../data/models/User";

const defaultState = {
    user: new User()
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PRIMARY_USER:
            return {...state, user: action.user};
        default:
            return state;
    }
}