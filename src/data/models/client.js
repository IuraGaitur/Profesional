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
    treatments = [];
    formula = '';
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
        this.formula = data.formula;
        this._rev = data._rev;
        return this;
    }

    getID() {
        return 1;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    addTreatment(treatment) {
        this.treatments.push(treatment);
    }

    removeTreatment(treatment) {
        let index = this.treatments.indexOf(treatment);
        this.treatments.splice(index, 1);
    }

    // getFormulas() {
    //     return [{
    //         id: 0,
    //         formula: this.getFormula(),
    //         date: 'May 7, 2018',
    //         type: 'Intense'
    //     }];
    // }

}