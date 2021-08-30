import { Modal } from '@elao/admin';

export default class ModalTrigger {
    static init() {
        const elements = document.body.querySelectorAll('[data-modal]');

        return Array.from(elements).map(element => new this(element));
    }

    constructor(element) {
        this.element = element;
        this.target = document.body.querySelector(element.dataset.modal);
        this.modal = Modal.get(this.target);
        this.buttons = Array.from(this.target.querySelector('.modal__actions').querySelectorAll('button'));

        this.element.addEventListener('click', this.modal.toggle);

        this.buttons.forEach(button => button.addEventListener('click', this.modal.toggle));
    }
}
