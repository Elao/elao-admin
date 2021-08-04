/**
 * Choice
 */
export default class Choice {
    static init(TomSelect) {
        if (typeof TomSelect === 'undefined') {
            return console.error('You must pass and instance of tom-select');
        }

        const elements = document.body.querySelectorAll('[data-choice]');

        return Array.from(elements).map(element => {
            const config = { create: false, plugins: [] };

            if (element.getAttribute('multiple') === 'multiple') {
                config.plugins.push('remove_button');
                config.remove_button = { title: 'Remove' };
            }

            new this(TomSelect, element, config);
        });
    }

    constructor(TomSelect, element, config) {
        this.element = new TomSelect(element, config);
    }
}
