import {IS_LOGGED_IN, NO_USER, INIT} from 'src/app/actions';

const defaultState = {
    checkedForUser: false,
    user: null,
    languages: [],
    countries: [],
    genders: [],
    productsCategories: {care: [], styling: []}
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case INIT:
            return {...state, countries: action.countries, languages: action.languages,
                genders: action.genders, productsCategories: action.productsCategories};
        case IS_LOGGED_IN:
            return {...state, checkedForUser: true, user: action.user, loggedIn: true};
        case NO_USER:
            return {...state, checkedForUser: true, user: null, loggedIn: false};
        default:
            return state;
    }
}