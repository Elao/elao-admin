import '../styles/app.scss';

import { Collapsible, Drop, Tree, MobileSidebar } from '@elao/admin';
import ColorPicker from './ColorPicker';

window.addEventListener('load', function onLoad() {
    // Behaviors
    Collapsible.init();
    Drop.init();
    Tree.init();

    // Mobile
    MobileSidebar.init();

    // Color Picker
    new ColorPicker(document.forms['color-picker']['primary-color']);
});
