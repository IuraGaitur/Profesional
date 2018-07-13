import { Actions } from 'react-native-router-flux';
import ClientDao from 'src/data/database/clientDao';
import {INIT, NO_ACTION} from 'src/app/actions';
import DiagnosisCode from 'src/data/models/diagnosisCode';

export function init() {
    return {
        type: INIT,
        infoCode: '<b>QUESTION STARTERS</b><br/><p>Before we start I would like to know:</p><br/><p>Can you describe your hair for me?</p><br/><p>What do you like about it?</p>',
        infoCare: '<b>QUESTION STARTERS</b><br/><p>Before we start I would like to know:</p><br/><p>Can you describe your hair for me?</p><br/><p>What do you like about it?</p>'
    }
}

export function showInfoScreen() {
    Actions.info();
    dispatch({type: NO_ACTION});
}

export function saveClientTreatment(client, diagnosis, treatment) {
    return async (dispatch) => {
        let diagnosisCode = new DiagnosisCode(diagnosis, treatment);
        await new ClientDao().saveClientTreatment(client, diagnosisCode);
        Actions.main();
        dispatch({type: NO_ACTION});
    }
}