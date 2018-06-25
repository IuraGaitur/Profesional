export default class Client {

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

    fromJSON(data) {
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
        return this;
    }

    getID() {
        return 1;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    getFormula() {
        return 'A5 + B6 + E12 + F12';
    }

}