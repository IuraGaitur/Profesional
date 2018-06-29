import blowPages from "../../../../assets/mocks/diagnoses/blow/success.json";
import energyPages from "../../../../assets/mocks/diagnoses/energy/success.json";
import DiagnosisQuizResponse from "../response/DiagnosisQuizResponse";

export default class DiagnosisMock {
    getBlowDryQuiz() {
        return new DiagnosisQuizResponse(blowPages).diagnosisQuiz;
    }

    getEnergyCodeQuiz() {
        return new DiagnosisQuizResponse(energyPages).diagnosisQuiz;
    }
}
