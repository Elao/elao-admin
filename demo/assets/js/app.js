import TomSelect from 'tom-select';
import { Collapsible, Drop, Tree, MobileSidebar, NavigableTable, Choice } from '@elao/admin';
import ColorPicker from './ColorPicker';
import ModalTrigger from './ModalTrigger';
import '../styles/app.scss';

window.addEventListener('load', function onLoad() {
    // Behaviors
    Collapsible.init();
    Drop.init();
    Tree.init();
    NavigableTable.init();
    Choice.init(TomSelect);

    // Mobile
    MobileSidebar.init();

    // Color Picker
    new ColorPicker(document.forms['color-picker']['primary-color']);

    ModalTrigger.init()
});
