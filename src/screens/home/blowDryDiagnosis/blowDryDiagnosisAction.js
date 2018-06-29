import DiagnosisQuizApi from "../../../data/api/DiagnosisQuizApi";
import { Actions } from 'react-native-router-flux';
import Constants from '../../../utils/Constants';
export const INIT = 'INIT';

export function init() {
    return async(dispatch) => {
        let diagnosisQuiz = new DiagnosisQuizApi().instance().getBlowDryQuiz();
        return dispatch(getDiagnosisQuiz(diagnosisQuiz));
    }
}

function getDiagnosisQuiz(diagnosisQuiz) {
    return {
        type: INIT,
        diagnosisQuiz: diagnosisQuiz
    }
}

export function createTreatment(client) {
    Actions.treatment({newClient: client});
    return {type: Constants.NO_ACTION};
}

export function goBack() {
    Actions.pop();
    return {type: Constants.NO_ACTION};
}