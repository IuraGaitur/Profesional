import {INIT} from 'src/app/actions';

const defaultState = {
    codeInfo: '',
    careInfo: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INIT:
            return {...state, codeInfo: action.infoCode, careInfo: action.infoCare};
        default:
            return state;
    }
}