export default class DiagnosisCode {
    treatment = null;
    diagnosis = null;
    type = null;

    getType() {
        return this.type ? this.type.replace('_', ' ') : '';
    }

    constructor(diagnosis, treatment, type) {
        this.diagnosis = diagnosis;
        this.treatment = treatment;
        this.type = type;
    }
}