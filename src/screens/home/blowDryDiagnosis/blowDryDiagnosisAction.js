import { Actions } from 'react-native-router-flux';
import {INIT, NO_ACTION} from 'src/app/actions';
import DiagnosisQuizApi from 'src/data/api/diagnosisQuizApi';
import {BLOW_DRY} from 'src/data/models/treatment/treatmentType';

export const init = () => {
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

export const createTreatment = (client, diagnosis) => {
    diagnosis.type = BLOW_DRY;
    console.log(diagnosis);
    Actions.treatment({newClient: client, diagnosis: diagnosis});
    return {type: NO_ACTION};
};

export const goBack = () => {
    Actions.pop();
    return {type: NO_ACTION};
};