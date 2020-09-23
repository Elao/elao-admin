import TreeItem from './TreeItem';

/**
 * Tree
 */
export default class Tree {
    static get containerClass() { return 'tree'; }
    static get itemClass() { return 'tree-item'; }

    static init() {
        const { containerClass, itemClass } = this;
        const elements = Array.from(document.getElementsByClassName(containerClass));

        return elements.map(element => {
            return new this(element, Array.from(element.querySelectorAll(`:scope > .${itemClass}`)));
        });
    }

    constructor(container, items) {
        this.container = container;
        this.items = items.map(item => TreeItem.init(this, item)).filter(item => !!item);
    }

    setActive(item, active) {
        if (active) {
            this.items.forEach(child => {
                if (child !== item) {
                    child.setActive(false);
                }
            });
        }

        item.setActive(active);
    }
}
