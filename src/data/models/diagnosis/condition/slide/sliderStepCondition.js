export default class SliderStepCondition {
    id = 0;
    title = '';
    steps = [];
    categories = [];
    selectedItem = null;
    value = 0;

    constructor(id, title, categories, steps, value) {
        this.id = id;
        this.title = title;
        this.steps = steps;
        this.categories = categories;
        this.value = value;
    }
}