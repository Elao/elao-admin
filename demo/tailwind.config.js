const { customize } = require('@elao/admin/elao-design-system');

/**
 * Usage: to use this custom config,
 * use `@elao/admin/style/style.scss` in demo/assets/styles/app.scss instead of the pre-build `@elao/admin` styles.
 */

/** @type {import('tailwindcss').Config} */
module.exports = customize({
  content: [
    './templates/**/*.html.twig',
    './assets/**/*.js',
    // https://tailwindcss.com/docs/content-configuration#working-with-third-party-libraries
    './node_modules/@elao/admin/src/**/*.js',
    './vendor/elao/admin-theme-bundle/Resources/views/**/*.html.twig',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // DEFAULT: 'blue',
          // dark: '#353c79',
        },
        // warning: 'orange',
        // info: 'skyblue',
        // success: 'green',
        // danger: {
        //   DEFAULT: 'tomato',
        // },
      },
      fontSize: {
        // h1: ['3rem', { lineHeight: '3.5rem' }],
        // h2: '2.5rem',
      },
      spacing: {
        // '7': '2rem',
      }
    },
  },

  safelist: [
    { pattern: /^bg-(primary|success|info|warning|danger|accessibility-highlight)(-.*)?$/ },
    { pattern: /^text-(primary|success|info|warning|danger|accessibility-highlight)(-.*)?$/ },
  ]
});
