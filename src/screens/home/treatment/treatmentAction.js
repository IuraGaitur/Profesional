import { Actions } from 'react-native-router-flux';
import Constants from 'src/utils/Constants';
import ClientDao from 'src/data/database/ClientDao';
import {INIT, NO_ACTION} from 'src/app/actions';

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

export function saveClient(client) {
    return async (dispatch) => {
        await new ClientDao().saveClientTreatment(client);
        Actions.main();
        dispatch({type: NO_ACTION});
    }
}