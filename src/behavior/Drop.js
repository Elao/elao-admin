import Collapsible from './Collapsible';

/**
 * Drop
 */
export default class Drop extends Collapsible {
    static get containerClass() { return 'drop'; }
    static get containerActiveClass() { return 'drop--show'; }
    static get targetClass() { return 'drop__menu'; }
    static get triggerClass() { return 'drop__button'; }

    static init() {
        const { containerClass, triggerClass, targetClass } = this;
        const elements = Array.from(document.getElementsByClassName(containerClass));

        return elements.map(element => {
            return new this(element, element.querySelector(`.${triggerClass}`), element.querySelector(`.${targetClass}`));
        });
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
