# Elao admin

[Demo](https://elao.github.io/elao-admin/)

## Installation

```
npm install @elao/admin
```

## Usage

### In HTML page

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="dist/elao-admin.css">
    <script src="dist/elao-admin.js" async></script>
  </head>
  <body>
    <script>
    window.addEventListener('load', function onLoad() {
      const { Collapsible, Drop, Tree, MobileSidebar } = elaoAdmin;

      Collapsible.init();
      Drop.init();
      Tree.init();
      MobileSidebar.init();
    });
    </script>
  </body>
</html>
```

### In your app's build:

```javascript
/* assets/js/app.js */
import { Collapsible, Drop, Tree, MobileSidebar } from '@elao/admin';
// Or with ADM Modules:
const { Collapsible, Drop, Tree, MobileSidebar } = require('@elao/admin');

Collapsible.init();
Drop.init();
Tree.init();
MobileSidebar.init();
```

```scss
/* assets/style/app.scss */

// Import Work Sans font
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap');

// Import elao/admin main style file.
@import '@elao/admin';

// Customize style with variables
@import './variables';
```

```scss
/* assets/style/variables.scss */
:root {
  --primary: #e63218;
  --primary--dark: #b11803;
  --text: #51607a;
  --text--dark: #384257;
  --text--light: #9e9a9a;
  --text--lighter: #bcb7b7;
  --border: #faeded;
  --border--dark: #f2d2d2;
  --background: #fafaff;
  --background--dark: #e2e4f7;
  --disabled: #edeefa;
  --success: #00cc99;
  --warning: #ffca28;
  --danger: #ef4055;
  --primary-font: 'Work Sans';
  --screen-sm: 750px;
  --screen-md: 1000px;
}
```

## Contributing

Install dependencies:

```bash
make install
```

Start the dev server:

```bash
make start
```

Then go to [http://localhost:8093](http://localhost:8093)

### Fontello

- `make fontello-push` will open your fontello project on http://fontello.com/.
- Modify your font on http://fontello.com/ then click on "Save session".
- `make fontello-pull` will download your modifications and update project files.
- Commit the modifications.
