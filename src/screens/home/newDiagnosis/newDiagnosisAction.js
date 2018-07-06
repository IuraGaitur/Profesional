import {Actions} from 'react-native-router-flux';
import {NO_ACTION} from 'src/app/actions';

export const showUsingEnergyCode = (client) => {
    Actions.energyDiagnosis({newClient: client});
    return {type: NO_ACTION};
};

export const showUsingBlowDryCode = (client) => {
    Actions.blowDiagnosis({newClient: client});
    return {type: NO_ACTION};
};

export const goBack = () => {
    Actions.replace('main');
    return {type: NO_ACTION};
};