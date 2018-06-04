import DetailsQuestionsApi from "../../data/api/DetailsQuestionsApi";
import { Actions } from 'react-native-router-flux';
export const INIT = 'INIT';
export const ERROR = 'ERROR';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const NETWORK_ERROR = 'NETWORK_ERROR';

export function init() {
    return async(dispatch) => {
        console.log("Get data");
        let questions = new DetailsQuestionsApi().instance().getAll();
        console.log("Dispatch data");
        return dispatch(getQuestions(questions));
    }
}

function getQuestions(questions) {
    console.log(questions);
    return {
        type: INIT,
        questions: questions
    }
}

function errorNetwork() {
    return {
        type: NETWORK_ERROR
    }
}

export function goBack() {
    Actions.pop();
    return {type: ''};
}