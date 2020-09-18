export default class MobileSidebar {
    static get menuButtonSelector() { return '.header .menu-button'; }
    static get navSelector() { return '.mobile-nav'; }
    static get menuButtonOffClass() { return 'menu-button--close'; }
    static get mobileNavActiveClass() { return 'mobile-nav--show'; }

    static init() {
        const { menuButtonSelector, navSelector } = this;

        const button = document.querySelector(menuButtonSelector);
        const menu = document.querySelector(navSelector);

        if (!(button && menu)) {
            return null;
        }

        return new this(button, menu);
    }

    constructor(button, menu) {
        this.button = button;
        this.menu = menu;
        this.active = false;

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);

        this.button.addEventListener('click', this.toggle);
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
        const { menuButtonOffClass, mobileNavActiveClass } = this.constructor;

        this.button.classList.toggle(menuButtonOffClass, this.active);
        this.menu.classList.toggle(mobileNavActiveClass, this.active);
    }

    cancel(event = null) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
