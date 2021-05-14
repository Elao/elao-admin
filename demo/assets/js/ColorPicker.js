export default class ColorPicker {
    constructor(element) {
        this.element = element;

        this.element.addEventListener('change', this.onChange.bind(this));
    }

    onChange() {
        this.setValue(this.element.value);
    }

    setValue(value) {
        document.body.style.setProperty('--primary', value);
    }
}
