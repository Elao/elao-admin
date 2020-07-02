/**
 * Tree item
 */
export default class TreeItem {
    static get triggerClass() { return 'tree-item__trigger'; }
    static get contentClass() { return 'tree-item__content'; }
    static get itemActiveClass() { return 'tree-item--active'; }

    static init(tree, element) {
        const { triggerClass, contentClass } = this;
        const trigger = element.querySelector(`:scope > .${triggerClass}`);
        const content = element.querySelector(`:scope > .${contentClass}`);

        if (!(trigger && content)) {
            return null;
        }

        return new this(tree, element, trigger, content);
    }

    constructor(tree, container, trigger, content) {
        this.tree = tree;
        this.container = container;
        this.trigger = trigger;
        this.content = content;
        this.active = false;

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);

        this.trigger.addEventListener('click', this.toggle);
    }

    toggle(event = null) {
        this.cancel(event);
        this.tree.setActive(this, !this.active);
    }

    open(event = null) {
        this.cancel(event);
        this.tree.setActive(this, true);
    }

    close(event = null) {
        this.cancel(event);
        this.tree.setActive(this, false);
    }

    setActive(active) {
        this.active = active;
        this.render();
    }

    render() {
        const { itemActiveClass } = this.constructor;

        this.container.classList.toggle(itemActiveClass, this.active);
    }

    cancel(event = null) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
