import moment from "moment";

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

    fromJSON(data) {
        this.clientID = data.clientID;
        this.id = data.id;
        this.type = data.type;
        this.formula = data.formula;
        this.date = data.date;
        this.data = data.data;
        return this;
    }

    getCreationDate() {
        return moment(this.date).format('LL');
    }
}