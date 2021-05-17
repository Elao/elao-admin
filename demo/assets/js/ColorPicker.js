export default class ColorPicker {
    constructor(element) {
        this.element = element;
        this.parser = /^#(\w{2})(\w{2})(\w{2})$/i;

        this.onChange = this.onChange.bind(this);

        this.element.addEventListener('change', this.onChange);

        this.load();
    }

    load() {
        const color = localStorage.getItem('color');

        if (color) {
            this.setValue(color);
        }
    }

    onChange() {
        this.setValue(this.element.value);
    }

    setValue(value) {
        localStorage.setItem('color', value);
        this.element.value = value;
        document.body.style.setProperty('--primary', value);
        document.body.style.setProperty('--primary--dark', this.modify(value, v => v - 25));
    }

    modify(value, change) {
        const colors = this.parser.exec(value.trim()).slice(1)
            .map(value => Math.min(Math.max(change(parseInt(value, 16)), 0), 255).toString(16).padStart(2, '0'));

        return `#${colors.join('')}`;
    }
}
