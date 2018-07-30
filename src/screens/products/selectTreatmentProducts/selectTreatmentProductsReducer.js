import {GET_CARE_ITEMS, GET_STYLING_ITEMS} from 'src/app/actions';

const defaultState = {};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CARE_ITEMS:
            return {...state, careProducts: action.careProducts};
        case GET_STYLING_ITEMS:
            return {...state, stylingProducts: action.stylingProducts};
        default:
            return state;
    }
}