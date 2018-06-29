import DiagnosisQuizApi from "../../../data/api/DiagnosisQuizApi";
import { Actions } from 'react-native-router-flux';
import Constants from '../../../utils/Constants';
export const INIT = 'INIT';

export function init() {
    return async(dispatch) => {
        let diagnosisQuiz = new DiagnosisQuizApi().instance().getEnergyCodeQuiz();
        return dispatch(getDiagnosisQuiz(diagnosisQuiz));
    }
}

function getDiagnosisQuiz(diagnosisQuiz) {
    return {
        type: INIT,
        diagnosisQuiz: diagnosisQuiz
    }
}

export function showTreatment(client) {
    Actions.treatment({newClient: client});
    return {type: Constants.NO_ACTION};
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