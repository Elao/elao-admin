export default class NavigableTable {
    static init() {
        const elements = document.body.querySelectorAll('tr[data-default-action]');

        return Array.from(elements).map(element => new this(element));
    }

    constructor(element) {
        this.element = element;

        this.onClick = this.onClick.bind(this);

        this.element.addEventListener('click', this.onClick);
    }

    onClick(event) {
        const { target, currentTarget } = event;

        if (['a', 'button'].includes(target.tagName.toLowerCase())) {
            return;
        }

        const defaultAction = currentTarget.querySelector(
            currentTarget.dataset.defaultAction
        );

        if (defaultAction) {
            defaultAction.click();
        }
    }
}
