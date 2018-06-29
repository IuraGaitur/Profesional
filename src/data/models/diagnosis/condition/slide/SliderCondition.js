export default class SliderQuestion {
    id = 0;
    title = '';
    background = '';
    steps = [];
    info = '';
    selectedItem = null;

    constructor(id, title, background, info, steps) {
        this.id = id;
        this.title = title;
        this.background = background;
        this.info = info;
        this.steps = steps;
    }

    hasInfo() {
        return !this.info.isEmpty() && this.info != null;
    }

}