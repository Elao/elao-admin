import '../styles/app.scss';

import { Collapsible, Drop, Tree, MobileSidebar } from '@elao/admin';

window.addEventListener('load', function onLoad() {
    // Behaviors
    Collapsible.init();
    Drop.init();
    Tree.init();

    // Mobile
    MobileSidebar.init();
});
