export default class SliderQuestion {
    id = 0;
    title = '';
    background = '';
    steps = [];
    info = '';
    selectedItem = null;
    value = 0;

    constructor(id, title, background, info, steps, value) {
        this.id = id;
        this.title = title;
        this.background = background;
        this.info = info;
        this.steps = steps;
        this.value = value;
    }

    hasInfo() {
        return !this.info.isEmpty() && this.info != null;
    }

}