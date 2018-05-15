import {REQUEST_LOGIN, LOGIN_FAIL, LOGIN_SUCCESS} from './loginAction';
import User from "../../data/models/User";

const defaultState = {
    user: new User()
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}