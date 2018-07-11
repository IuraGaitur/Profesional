import DiagnosisQuizApi from 'src/data/api/diagnosisQuizApi';
import { Actions } from 'react-native-router-flux';
import {INIT, NO_ACTION} from 'src/app/actions';

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

export function showTreatment(client, diagnosis) {
    Actions.treatment({newClient: client, diagnosis: diagnosis});
    return {type: NO_ACTION};
}

export function goBack() {
    Actions.pop();
    return {type: NO_ACTION};
}