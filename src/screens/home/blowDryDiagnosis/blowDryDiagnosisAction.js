import DetailsQuestionsApi from "../../../data/api/DetailsQuestionsApi";
import { Actions } from 'react-native-router-flux';
import Constants from '../../../utils/Constants';
export const INIT = 'INIT';
export const ERROR = 'ERROR';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const NETWORK_ERROR = 'NETWORK_ERROR';

export function init() {
    return async(dispatch) => {
        let questions = new DetailsQuestionsApi().instance().getBlowDry();
        return dispatch(getQuestions(questions));
    }
}

export function createTreatment(client) {
    Actions.treatment({newClient: client});
    return {type: Constants.NO_ACTION};
}

function getQuestions(questions) {
    return {
        type: INIT,
        blowQuestions: questions
    }
}

function errorNetwork() {
    return {
        type: NETWORK_ERROR
    }
}

export function goBack() {
    Actions.pop();
    return {type: Constants.NO_ACTION};
}