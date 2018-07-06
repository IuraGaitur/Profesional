import Constants from 'src/utils/Constants';
import DetailsQuestionsMock from 'src/data/api/mock/DiagnosisQuizMock';
import DetailsQuestionsNetwork from 'src/data/api/network/DiagnosisQuizNetwork';

export default class DiagnosisApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new DetailsQuestionsMock();
        }
        return new DetailsQuestionsNetwork();
    }
}