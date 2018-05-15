import {HAS_USER, NO_USER} from './splashAction';

const defaultState = {
    checkedForUser: false,
    user: null
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case HAS_USER:
            return {...state, checkedForUser: true, user: action.user};
        case NO_USER:
            return {...state, checkedForUser: true, user: null};
        default:
            return state;
    }
}