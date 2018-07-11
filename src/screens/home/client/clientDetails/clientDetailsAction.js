import {NO_ACTION, GET_CLIENT} from 'src/app/actions';
import {Actions} from 'react-native-router-flux';
import ClientDao from 'src/data/database/clientDao';

export const getClientInfo = (id) => {
    return async (dispatch) => {
        let client = await new ClientDao().getByID(id);
        dispatch({type: GET_CLIENT, client: client});
    };
};

export const editClient = (client) => {
    Actions.editClient({currentClient: client});
    return {type: NO_ACTION};
};

export const removeClient = (client) => {
    return async (dispatch) => {
        await new ClientDao().remove(client);
        Actions.replace('main');
        dispatch({type: NO_ACTION});
    };
};

export const showNewDiagnosScreen = (client) => {
    Actions.newDiagnosis({newClient: client});
    return {type: NO_ACTION};
};

export const showEditCodeScreen = (client) => {
    Actions.treatment({newClient: client});
    return {type: NO_ACTION};
};

