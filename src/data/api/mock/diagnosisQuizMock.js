import blowPages from 'Sytem_Pro/assets/mocks/diagnoses/blow/success.json';
import energyPages from 'Sytem_Pro/assets/mocks/diagnoses/energy/success.json';
import DiagnosisQuizResponse from 'src/data/api/response/diagnosisQuizResponse';

export default class DiagnosisMock {
    getBlowDryQuiz() {
        let blowData = JSON.parse(JSON.stringify(blowPages));
        return new DiagnosisQuizResponse(blowPages).diagnosisQuiz;
    }

    getEnergyCodeQuiz() {
        let energyData = JSON.parse(JSON.stringify(energyPages));
        return new DiagnosisQuizResponse(energyData).diagnosisQuiz;
    }
}
