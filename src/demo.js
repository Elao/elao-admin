import { Collapsible, Drop, Tree, MobileSidebar } from '@elao/admin/src';
import '@elao/admin/style/style.scss';
import '@elao/admin/style/demo.scss';

window.addEventListener('load', function onLoad() {
    // Behaviors
    Collapsible.init();
    Drop.init();
    Tree.init();

    // Mobile
    MobileSidebar.init();
});
