import blowPages from "../../../../assets/mocks/diagnoses/blow/success.json";
import energyPages from "../../../../assets/mocks/diagnoses/energy/success.json";
import Page from "../../models/page/Page";
import SelectQuestion from "../../models/page/question/SelectQuestion";
import CheckQuestion from "../../models/page/question/CheckQuestion";
import SliderQuestion from "../../models/page/question/SliderQuestion";
import SliderStepQuestion from "../../models/page/question/SliderStepQuestion";

const TYPE_PROGRESS = 'PROGRESS';
const TYPE_CHECK = 'PICK';
const TYPE_SELECT = 'RADIO_CHOOSE';

const TYPE_PROGRESS_BACKGROUND = 'BACKGROUND';
const TYPE_PROGRESS_CATEGORY = 'STEP';

export default class DetailsQuestionsMock {
    getBlowDry() {
        return parsePages(blowPages);
    }

    getEnergyCode() {
        return parsePages(energyPages);
    }
}

function parsePages(data) {
    let pages = [];
    for (let item in data) {
        let title = data[item].page.title;
        let questions = parseQuestions(data[item].page.form);
        let page = new Page(title, questions);
        pages.push(page);
    }

    return pages;
}

function parseQuestions(questions) {
    let result = [];
    for (let item in questions) {
        let question = questions[item];
        let parsedQuestion = {};
        switch (question.type) {
            case TYPE_SELECT:
                parsedQuestion = parseRadioQuestion(question.data);
                break;
            case TYPE_CHECK:
                parsedQuestion = parsePickQuestion(question.data);
                break;
            case TYPE_PROGRESS:
                parsedQuestion = parseProgressQuestion(question.data);
                break;
        }
        result.push(parsedQuestion);
    }

    return result;
}

function parseRadioQuestion(question) {
    let options = question.options;
    return new SelectQuestion(options);
}

function parsePickQuestion(question) {
    let options = question.options;
    return new CheckQuestion(options);
}

function parseProgressQuestion(question) {
    let id = question.id;
    let title = question.title;
    let categories = question.categories;
    let background = question.background;
    let options = question.options;

    if (question.type == TYPE_PROGRESS_BACKGROUND) {
        return new SliderQuestion(id, title, background, options);
    }
    return new SliderStepQuestion(id, title, categories, options);
}