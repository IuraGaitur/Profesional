import allQuestions from "../../../../assets/mocks/questions/success.json";

export default class QuestionMock {
    getQuestions(string) {
        let questions = allQuestions;
        if(string) {
           questions = questions.filter(item => item.title.includes(string));
        }
        return questions;
    }
}