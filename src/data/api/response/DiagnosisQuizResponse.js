import Subject from 'src/data/models/diagnosis/subject/Subject';
import CheckCondition from 'src/data/models/diagnosis/condition/check/CheckCondition';
import SelectCondition from 'src/data/models/diagnosis/condition/select/SelectCondition';
import SliderStepCondition from 'src/data/models/diagnosis/condition/slide/SliderStepCondition';
import SliderCondition from 'src/data/models/diagnosis/condition/slide/SliderCondition';
import DiagnosisQuiz from 'src/data/models/diagnosis/DiagnosisQuiz';

const TYPE_PROGRESS = 'PROGRESS';
const TYPE_CHECK = 'PICK';
const TYPE_SELECT = 'RADIO_CHOOSE';
const TYPE_PROGRESS_BACKGROUND = 'BACKGROUND';
const TYPE_PROGRESS_CATEGORY = 'STEP';

export default class DiagnosisQuizResponse {
    diagnosisQuiz = null;

    constructor(data) {
        this.diagnosisQuiz = new DiagnosisQuiz(getSubjects(data));
    }
}

function getSubjects(data) {
    let subjects = [];
    for (let item in data) {
        let title = data[item].subject.title;
        let info = data[item].subject.info;
        let conditions = parseCondition(data[item].subject.form);
        let page = new Subject(title, info, conditions);
        subjects.push(page);
    }

    console.log(subjects);
    return subjects;
}


function parseCondition(conditions) {
    let result = [];
    for (let item in conditions) {
        let condition = conditions[item];
        let parsedCondition = {};
        switch (condition.type) {
            case TYPE_SELECT:
                parsedCondition = parseRadioCondition(condition.data);
                break;
            case TYPE_CHECK:
                parsedCondition = parsePickCondition(condition.data);
                break;
            case TYPE_PROGRESS:
                parsedCondition = parseProgressCondition(condition.data);
                break;
        }
        result.push(parsedCondition);
    }

    return result;
}

function parseRadioCondition(condition) {
    let options = condition.options;
    return new SelectCondition(options);
}

function parsePickCondition(condition) {
    let options = condition.options;
    let title = condition.title;
    return new CheckCondition(options, title);
}

function parseProgressCondition(condition) {
    let id = condition.id;
    let title = condition.title;
    let categories = condition.categories;
    let background = condition.background;
    let info = condition.info;
    let options = condition.options;

    if (condition.type == TYPE_PROGRESS_BACKGROUND) {
        return new SliderCondition(id, title, background, info, options);
    }
    return new SliderStepCondition(id, title, categories, options);
}