import blowPages from 'Sytem_Pro/assets/mocks/diagnoses/blow/success.json';
import energyPages from 'Sytem_Pro/assets/mocks/diagnoses/energy/success.json';
import DiagnosisQuizResponse from 'src/data/api/response/diagnosisQuizResponse';

export default class DiagnosisMock {
    getBlowDryQuiz() {
        return new DiagnosisQuizResponse(blowPages).diagnosisQuiz;
    }

    getEnergyCodeQuiz() {
        return new DiagnosisQuizResponse(energyPages).diagnosisQuiz;
    }
}
