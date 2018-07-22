import {Actions} from 'react-native-router-flux';
import {NO_ACTION} from 'src/app/actions';

export const selectTreatment = (id) => {
    Actions.pop();
    return {type: NO_ACTION};
};