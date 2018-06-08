import blowQuestions from "../../../../assets/mocks/diagnoses/blow/success.json";
import energyQuestions from "../../../../assets/mocks/diagnoses/energy/success.json";

export default class DetailsQuestionsMock {
    getBlowDry() {
        return blowQuestions;
    }

    getEnergyCode() {
        return energyQuestions;
    }
}