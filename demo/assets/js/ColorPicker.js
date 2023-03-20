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

        const hsl = this.hexToHsl(value);
        const darkValue = this.modify(value, v => v - 25);
        const hslDarkValue = this.hexToHsl(darkValue);

        document.body.style.setProperty('--color-primary', this.toHslString(hsl));
        document.body.style.setProperty('--color-primary-hue', hsl.h);
        document.body.style.setProperty('--color-primary--dark', this.toHslString(hslDarkValue));
    }

    modify(value, change) {
        const colors = this.parser.exec(value.trim()).slice(1)
            .map(value => Math.min(Math.max(change(parseInt(value, 16)), 0), 255).toString(16).padStart(2, '0'));

        return `#${colors.join('')}`;
    }

    hexToHsl(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        let r = parseInt(result[1], 16);
        let g = parseInt(result[2], 16);
        let b = parseInt(result[3], 16);

        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }

            h /= 6;
        }

        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);

        return { h, s, l };
    }

    toHslString(hsl) {
        return `${hsl.h}, ${hsl.s}%, ${hsl.l}%`;
    }

}
