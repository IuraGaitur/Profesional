export default class Subject {
    title = '';
    info = '';
    questions = [];

    constructor(title, info, questions) {
        this.title = title;
        this.info = info;
        this.questions = questions;
    }

    hasInfo() {
        return !this.info.isEmpty() && this.info != null;
    }
}