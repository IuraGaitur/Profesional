import {NO_ACTION} from 'src/app/actions';
import {Actions} from 'react-native-router-flux';
import ClientDao from 'src/data/database/ClientDao';

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
