import Constants from './../../utils/Constants';
import DetailsQuestionsMock from "./mock/DiagnosisQuizMock";
import DetailsQuestionsNetwork from "./network/DiagnosisQuizNetwork";

export default class DiagnosisApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new DetailsQuestionsMock();
        }
        return new DetailsQuestionsNetwork();
    }
}