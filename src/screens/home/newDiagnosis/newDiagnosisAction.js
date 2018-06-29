import {Actions} from 'react-native-router-flux';
import Constants from './../../../utils/Constants';

export function showUsingEnergyCode(client) {
    Actions.energyDiagnosis({newClient: client});
    return {type: Constants.NO_ACTION};
}

export function showUsingBlowDryCode(client) {
    Actions.blowDiagnosis({newClient: client});
    return {type: Constants.NO_ACTION};
}