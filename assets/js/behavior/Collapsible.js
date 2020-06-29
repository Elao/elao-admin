
export default class Collapsible {
    static get containerClass() { return 'collapse'; }
    static get triggerSelector() { return '.collapse__trigger'; }
    static get targetSelector() { return '.collapse__menu'; }
    static get containerActiveClass() { return 'collapse--show'; }

    static init() {
        const { containerClass, triggerSelector, targetSelector } = this;
        const elements = Array.from(document.getElementsByClassName(containerClass));

        return elements.map(element => {
            return new this(element, element.querySelector(triggerSelector), element.querySelector(targetSelector));
        });
    }

    constructor(container, trigger, target) {
        this.container = container;
        this.trigger = trigger;
        this.target = target;
        this.active = false;

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);

        this.trigger.addEventListener('click', this.toggle);
    }

    toggle(event = null) {
        this.cancel(event);
        this.setActive(!this.active);
    }

    open(event = null) {
        this.cancel(event);
        this.setActive(true);
    }

    close(event = null) {
        this.cancel(event);
        this.setActive(false);
    }

    setActive(active) {
        this.active = active;
        this.render();
    }

    render() {
        const { containerActiveClass } = this.constructor;

        this.container.classList.toggle(containerActiveClass, this.active);
    }

    cancel(event = null) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
