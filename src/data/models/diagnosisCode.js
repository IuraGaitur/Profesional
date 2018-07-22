export default class DiagnosisCode {
    treatment = null;
    diagnosis = null;
    type = null;

    constructor(diagnosis, treatment) {
        this.diagnosis = diagnosis;
        this.treatment = treatment;
    }
}