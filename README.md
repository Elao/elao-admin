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

#### Pre-built theme

If you just want to give a try and use the regular theme and component, you can use the pre-built CSS:

```scss
/* assets/style/app.scss */

// Import Work Sans font
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap');

// Import elao/admin main style file.
@import '@elao/admin';

// Customize style with variables
@import './variables';
```

#### Custom theme

If you want to customize the theme, and have a more complete experience to build your own components,
based on the design system token and Tailwind helpers, you can install
the [Tailwind dependencies](https://tailwindcss.com/docs/installation/using-postcss):

```shell
npm install -D tailwindcss postcss autoprefixer
````

and create a `tailwind.config.js` file at the root of your project:

```javascript
const { customize } = require('@elao/admin/elao-design-system');

/** @type {import('tailwindcss').Config} */
module.exports = customize({
  content: [
    './templates/**/*.html.twig',
    './assets/**/*.js',
    // https://tailwindcss.com/docs/content-configuration#working-with-third-party-libraries
    './node_modules/@elao/admin/src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   DEFAULT: 'blue',
        // },
      },
      spacing: {
        // '7': '2rem',
      },
    },
  },
});
```

Create a `postcss.config.js` file at the root of your project:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Then, require the Tailwind CSS file in your main SCSS file:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

// Import Work Sans font
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap');

@import '@elao/admin/style/style.scss';
```

#### CSS Variables

These CSS variables can be used with both pre-build or custom build for simple customization of the theme colors.
But you can also fine-tune the theme with the Tailwind configuration instead for more flexibility.

```scss
/* assets/style/variables.scss */
:root {
  // Primary color is expressed as HSL arguments,
  // so the color palette shades can be automatically computed:
  --color-primary: 8, 81%, 50%;
  --color-primary-hue: 8;
  // A value is auto-generated from primary color shades, 
  // but can still be overridden:
  --color-primary-dark: #353c79;
  
  // The following colors are expressed as RGB arguments,
  // so it can be used with Tailwind opacity modifier syntax:: 
  --color-success: 0, 204, 153;
  --color-warning: 255, 202, 40;
  --color-info: 33, 158, 188;
  --color-danger: 239, 64, 85;
  --color-accessibility-highlight: 237, 238, 250;

  --text: #51607a;
  --text--dark: #384257;
  --text--light: #9e9a9a;
  --text--lighter: #bcb7b7;
  
  --border: #faeded;
  --border--dark: #f2d2d2;
  
  --background: #fafaff;
  --background--dark: #e2e4f7;
  
  --primary-font: 'Work Sans';
}
```

### Features

- [Choices dropdown](doc/choices.md)

## Contributing

### To the library

Install dependencies:

```shell
make install
```

Build with:

```shell
make build
```

Watch with:

```shell
make watch
```

### To the demo

> **Note**: For the best experience, you can simply run `make serve` in the root of the project,
> to serve both the library and the demo application and watching for changes.

The demo application lives inside the `demo` folder: 

```shell
cd demo
```

It's a Symfony application used to dynamically generate a static site
with [Stenope](https://github.com/StenopePHP/Stenope) with random but realistic data.

**It requires**:

- PHP 8.0+ and a local [Symfony CLI install](https://symfony.com/download).
- Node 16+ and NPM 7

In order to boot the application for development purposes, 
you need to build the library if not already done:

```shell
cd ../ && make build && cd demo
```

Then, you need to start a Symfony web server to expose the application,
as well as a Webpack dev-server to build assets with [HMR](https://webpack.js.org/concepts/hot-module-replacement/)
enabled.

➡️ Run the following command in order to start both servers:

```shell
make serve
```

ℹ️ The Symfony server command will display the URL to access the app (usually http://127.0.0.1:8000)

### Publish a new version

1. Update the version in `package.json`
2. [Create a new release and tag](https://github.com/Elao/elao-admin/releases/new) for this version with release `X.Y.Z` and tag `vX.Y.Z`.

### Fontello

- `make fontello.push` will open your fontello project on http://fontello.com/.
- Modify your font on http://fontello.com/ then click on "Save session".
- `make fontello.pull` will download your modifications and update project files.
- Commit the modifications.
