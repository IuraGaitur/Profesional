export default class Treatment {
    clientID = 0;
    id = 0;
    type = '';
    formula = '';
    date = new Date();
    data = [];

    constructor() {
        this.formula = 'A1 + B2 + C3';
    }

}