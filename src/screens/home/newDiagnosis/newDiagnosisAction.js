import { Actions } from 'react-native-router-flux';
import Constants from './../../../utils/Constants';

export function showUsingEnergyCode () {
    Actions.energyDiagnosis();
    return {type: Constants.NO_ACTION};
}

export function showUsingBlowDryCode () {
    Actions.blowDiagnosis();
    return {type: Constants.NO_ACTION};
}