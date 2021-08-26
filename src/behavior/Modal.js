export default class Modal {
    static init() {
        return Array.from(document.body.querySelectorAll('.modal')).map(this.get);
    }

    static get(element) {
        if (!(element._modal instanceof Modal)) {
            element._modal = new this(element);
        }

        return element._modal;
    }

    constructor(element) {
        this.element = element;

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);

        this.element.querySelector('.close').addEventListener('click', this.close);
    }

    isOpen() {
        return this.element.classList.contains('modal--open');
    }

    open() {
        this.element.classList.add('modal--open');
    }

    close() {
        this.element.classList.remove('modal--open');
    }

    toggle() {
        this.isOpen() ? this.close() : this.open();
    }
}
