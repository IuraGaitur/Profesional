import {BIG, SMALL} from "./CheckType";
export default class CheckCondition {

    constructor(options, title) {
        this.options = options;
        this.title = title;

        if(title) {
            this.type = BIG;
        }else {
            this.type = SMALL;
        }
    }

    options = [];
    type = SMALL;
    selectedItem = null;
}