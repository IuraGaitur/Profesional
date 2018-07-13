export default class DiagnosisCode {
    treatment = null;
    diagnosis = null;

    constructor(diagnosis, treatment) {
        this.diagnosis = diagnosis;
        this.treatment = treatment;
    }
}