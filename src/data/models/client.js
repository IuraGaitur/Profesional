import DiagnosisCode from 'src/data/models/diagnosisCode';
import Treatment from 'src/data/models/treatment/treatment';
import Diagnosis from 'src/data/models/diagnosis/diagnosis';

export default class Client {

    _id = 0;
    firstName = '';
    lastName = '';
    email = '';
    gender = '';
    birthday = '';
    city = '';
    country = '';
    postalCode = '';
    saveEnergyCode = false;
    receiveEmails = false;
    diagnosisCodes = [];
    _rev = '';

    fromJSON(data) {
        this._id = data._id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.gender = data.gender;
        this.birthday = data.birthday;
        this.city = data.city;
        this.country = data.country;
        this.saveEnergyCode = data.saveEnergyCode;
        this.receiveEmails = data.receiveEmails;
        this.postalCode = data.postalCode;
        this._rev = data._rev;
        this.diagnosisCodes = this.parseDiagnosisCodes(data.diagnosisCodes);
        return this;
    }

    parseDiagnosisCodes(data) {
        let diagnosisCodes = [];
        for (let i = 0; i < data.length; i++) {
            let diagnosis = data[i].diagnosis;
            let treatment = data[i].treatment;
            diagnosisCodes.push(new DiagnosisCode(new Diagnosis(diagnosis), new Treatment().fromJSON(treatment)));
        }
        return diagnosisCodes;
    }

    getID() {
        return 1;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    addDiagnosisCode(diagnosisCode) {
        if (!this.diagnosisCodes) {
            this.diagnosisCodes = [];
        }
        this.diagnosisCodes.push(diagnosisCode);
    }

    removeDiagnosisCode(treatment) {
        let index = this.diagnosisCodes.indexOf(treatment);
        console.log(index, ' : index');
        this.diagnosisCodes.splice(index, 1);
    }

    getFormula() {
        let formula = '';
        if (this.diagnosisCodes && this.diagnosisCodes.length > 0) {
            formula = this.diagnosisCodes[0].treatment.formula;
        }
        return formula;
    }
}