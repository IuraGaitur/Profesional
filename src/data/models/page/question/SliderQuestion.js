export default class SliderQuestion {
    id = 0;
    title = '';
    background = '';
    steps = [];
    selectedItem = null;

    constructor(id, title, background, steps) {
        this.id = id;
        this.title = title;
        this.background = background;
        this.steps = steps;
    }

}