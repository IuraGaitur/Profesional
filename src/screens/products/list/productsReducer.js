import {GET_ITEMS} from './productsAction';

const defaultState = {};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {...state, data: action.items};
        default:
            return state;
    }
}