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
            let choiceOptions = {};
            if (element.hasAttribute('data-choice-options')) {
                choiceOptions = JSON.parse(element.getAttribute('data-choice-options'));
            }

            const config = {
                create: false,
                allowEmptyOption: !element.hasAttribute('required'),
                plugins: [],
                ...choiceOptions
            };

            if (element.hasAttribute('multiple')) {
                config.plugins.push('remove_button');
                config.remove_button = { title: 'Remove' };
            } else {
                config.maxItems = 1;
                config.closeAfterSelect = true;
            }

            new this(TomSelect, element, config);
        });
    }

    constructor(TomSelect, element, config) {
        this.select = new TomSelect(element, config);

        if (config.closeAfterSelect) {
            this.select.on('item_add', () => this.select.blur());
        }
    }
}
