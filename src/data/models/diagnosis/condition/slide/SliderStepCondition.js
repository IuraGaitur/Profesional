export default class SliderStepCondition {
    id = 0;
    title = '';
    steps = [];
    categories = [];
    selectedItem = null;

    constructor(id, title, categories, steps,) {
        this.id = id;
        this.title = title;
        this.steps = steps;
        this.categories = categories;
    }
}