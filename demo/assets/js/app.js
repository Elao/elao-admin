import '../styles/app.scss';

import { Collapsible, Drop, Tree, MobileSidebar, NavigableTable } from '@elao/admin';
import ColorPicker from './ColorPicker';

window.addEventListener('load', function onLoad() {
    // Behaviors
    Collapsible.init();
    Drop.init();
    Tree.init();
    NavigableTable.init();

    // Mobile
    MobileSidebar.init();

    // Color Picker
    new ColorPicker(document.forms['color-picker']['primary-color']);
});
