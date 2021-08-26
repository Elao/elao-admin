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
        if (this.isOpen()) {
            return;
        }

        this.element.classList.add('modal--open');
        this.emit('open');
    }

    close() {
        if (!this.isOpen()) {
            return;
        }

        this.element.classList.remove('modal--open');
        this.emit('close');
    }

    toggle() {
        this.isOpen() ? this.close() : this.open();
    }

    addEventListener(...args) {
        return this.element.addEventListener(...args);
    }

    removeEventListener(...args) {
        return this.element.removeEventListener(...args);
    }

    emit(name) {
        this.element.dispatchEvent(new Event(name));
    }
}
