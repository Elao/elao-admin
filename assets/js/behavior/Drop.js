import Collapsible from './Collapsible';

export default class Drop extends Collapsible {
    static get containerClass() { return 'drop'; }
    static get triggerSelector() { return '.drop__button'; }
    static get targetSelector() { return '.drop__menu'; }
    static get containerActiveClass() { return 'drop--show'; }

    static init() {
        const { containerClass, triggerSelector, targetSelector } = this;
        const elements = Array.from(document.getElementsByClassName(containerClass));

        return elements.map(element => {
            return new this(element, element.querySelector(triggerSelector), element.querySelector(targetSelector));
        });
    }

    constructor(container, trigger, target) {
        super(container, trigger, target);
    }

    setActive(active) {
        super.setActive(active);

        if (active) {
            document.addEventListener('click', this.close);
        } else {
            document.removeEventListener('click', this.close);
        }
    }
}
