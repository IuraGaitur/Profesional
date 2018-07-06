import {GET_ITEMS, GET_CATEGORIES} from 'src/app/actions';

const defaultState = {};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {...state, data: action.items};
        case GET_CATEGORIES:
            return {...state, categories: action.categories};
        default:
            return state;
    }
}