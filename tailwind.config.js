const { ds } = require('./elao-design-system');

const ResponsiveVariants = ['sm', 'md', 'lg', 'xl', '2xl'];

component.OPTIONS = { variants: true, elements: true };

function component(name, options = component.OPTIONS) {
  const { variants, elements } = { ...component.OPTIONS, ...options };
  const delimiters = [];

  if (variants) {
    delimiters.push('--');
  }

  if (elements) {
    delimiters.push('__');
  }

  if (delimiters.length === 0) {
    return { pattern: new RegExp(`^${name}$`) };
  }

  return { pattern: new RegExp(`^${name}((${delimiters.join('|')}).*)?$`) };
}

const tailwindUtil = (name, withVariants = true) => ({
  pattern: new RegExp(`^${name}$`),
  variants: withVariants ? ResponsiveVariants : undefined,
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...ds,
  content: [
    // Does only watch for our own JS files, not the ones from the end-user project.
    './src/**/*.{,js}',
    // (Debug only): auto include classes used in the demo:
    // './demo/templates/**/*.html.twig',
  ],
  plugins: [],
  /**
   * When building the default CSS theme for our design system,
   * we need to tell Tailwind not to purge the components & utilities layers, even if they are not used.
   *
   * When extending the default config, Tailwind will purge the layers that are not used in the end-user project,
   * based on `content` files (HTML / Twig templates, Javascript, …).
   *
   * @see https://tailwindcss.com/docs/functions-and-directives#layer
   * @see https://tailwindcss.com/docs/content-configuration#safelisting-classes
   */
  safelist: [
    // Main colors:
    { pattern: /^bg-(primary|success|info|warning|danger|accessibility-highlight)(-.*)?$/ },
    { pattern: /^text-(primary|success|info|warning|danger)|accessibility-highlight(-.*)?$/ },
    // Our own components:
    component('card', { variants: false, elements: false }),
    component('alert'),
    component('animated-button'),
    component('breadcrumb'),
    component('button'),
    component('checkbox'),
    component('content-header'),
    component('data-cards', { variants: false, elements: false }),
    component('data-table'),
    component('form', { variants: true }),
    component('footer', { variants: false, elements: false }),
    component('icon'),
    component('loader', { elements: false }),
    component('menu-button'),
    component('mobile-nav'),
    component('modal'),
    component('radio', { variants: false, elements: false }),
    component('secondary-nav'),
    component('select'),
    component('switch'),
    component('tag'),
    component('tooltip'),
    component('tertiary-nav'),
    component('user-menu'),
    component('pagination'),
    component('primary-nav'),
    // Tailwind base utils:
    tailwindUtil('sr-only'),
    tailwindUtil('hidden'),
    tailwindUtil('block'),
  ],
}
