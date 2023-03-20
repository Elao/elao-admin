const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Elao Design System default config.
 *
 * @type {import('tailwindcss').Config}
 *
 * @see https://tailwindcss.com/docs/theme
 * @see defaults https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 */
const ds = {
  theme: {
    extend: {
      /**
       * Control the background color of an element using the bg-{color} utilities.
       *
       * @see https://tailwindcss.com/docs/background-color
       */
      backgroundColor: {
        DEFAULT: 'var(--background)',
        base: 'var(--background)', // To use the `bg-base` utility
        dark: 'var(--background--dark)',
      },
      /**
       * Control the border color of an element using the border-{color} utilities.
       *
       * @see https://tailwindcss.com/docs/border-color
       */
      borderColor: {
        // https://tailwindcss.com/docs/customizing-colors#using-css-variables
        DEFAULT: 'var(--border)',
        base: 'var(--border)', // To use the `border-base` utility
        dark: 'var(--border--dark)',
      },
      /**
       * Add primary and common colors, with some automatic shades.
       * By default, these colors will be made available everywhere in the framework where you use colors,
       * like the text color utilities, border color utilities, background color utilities, and more.
       *
       * @see https://tailwindcss.com/docs/customizing-colors#adding-additional-colors
       */
      colors: {
        // Custom colors, from CSS variables:
        // https://tailwindcss.com/docs/customizing-colors#using-css-variables
        primary: {
          ...generateColorGradients('primary'),
          dark: `var(--color-primary-dark, ${generateColorGradients('primary')['800']})`,
        },
        ...mainColor('success', colors.green),
        ...mainColor('success', colors.green),
        ...mainColor('warning', colors.amber),
        ...mainColor('danger', colors.red),
        ...mainColor('info', colors.sky),
        'accessibility-highlight': 'rgb(var(--color-accessibility-highlight) / <alpha-value>)',
      },
      /**
       * You can control the typeface of text using the font-{family} utilities.
       *
       * @see https://tailwindcss.com/docs/font-family
       */
      fontFamily: {
        primary: ['var(--primary-font, "Worker Sans")', ...defaultTheme.fontFamily.sans],
        sans: ['var(--primary-font, "Worker Sans")', ...defaultTheme.fontFamily.sans],
        icons: ['base-icons'],
      },
      /**
       * Add some common font sizes.
       * Controls the font size of an element using the text-{size} utilities.
       *
       * @see https://tailwindcss.com/docs/font-size
       */
      fontSize: {
        h1: defaultTheme.fontSize['4xl'],
        h2: defaultTheme.fontSize['3xl'],
        h3: defaultTheme.fontSize['2xl'],
        h4: defaultTheme.fontSize['xl'],
        h5: defaultTheme.fontSize['lg'],
        h6: defaultTheme.fontSize['base'],
      },
      /**
       * Add some common text colors.
       * Control the text color of an element using the text-{color} utilities.
       *
       * @see https://tailwindcss.com/docs/text-color
       */
      textColor: {
        /**
         * Uses "main" as identifier instead of base, not to be confounded with text-base from font-size:
         * https://tailwindcss.com/docs/font-size#setting-the-font-size
         */
        main: `var(--text, ${colors.slate['500']})`,
        dark: `var(--text--dark, ${colors.slate['600']})`,
        light: `var(--text--light, ${colors.slate['400']})`,
        lighter: `var(--text--lighter, ${colors.slate['300']})`,
      },
      /**
       * Set the maximum width of an element using the max-w-{size} utilities.
       *
       * @see https://tailwindcss.com/docs/max-width
       */
      maxWidth: {
        'main-content': '1900px', // Max content size for the main content area
      }
    },
  },
  plugins: [],
};

module.exports = {
  ds,

  /**
   * Customize the default config.
   *
   * @param {import('tailwindcss').Config} custom
   *
   * @return {import('tailwindcss').Config}
   */
  customize(custom) {
    return {
      ...ds,
      ...custom,
      theme: {
        ...ds.theme,
        ...custom.theme,

        extend: {
          ...ds.theme?.extend,
          ...custom.theme?.extend,

          ...mergedThemeConfig('backgroundColor', custom, ds),
          ...mergedThemeConfig('borderColor', custom, ds),

          colors: {
            ...mergedThemeConfig('colors', custom, ds).colors,
            primary: mergedColorDefinition('primary', custom, ds),
            success: mergedColorDefinition('success', custom, ds),
            warning: mergedColorDefinition('warning', custom, ds),
            danger: mergedColorDefinition('danger', custom, ds),
            info: mergedColorDefinition('info', custom, ds),
          },

          ...mergedThemeConfig('fontFamily', custom, ds),
          ...mergedThemeConfig('fontSize', custom, ds),
          ...mergedThemeConfig('maxWidth', custom, ds),
          ...mergedThemeConfig('spacing', custom, ds),
          ...mergedThemeConfig('textColor', custom, ds),
        },
      },
    }
  }
}

function mainColor(colorName, defaultPalette) {
  return {
    [colorName]: {
      ...defaultPalette,
      DEFAULT: `rgb(var(--color-${colorName}) / <alpha-value>)`
    },
  }
}

function mergedThemeConfig(configName, custom, ds) {
  return {
    [configName]: {
      ...ds.theme?.extend?.[configName],
      ...custom.theme?.extend?.[configName],
    }
  };
}

function mergedColorDefinition(colorName, custom, ds) {
  const defaultValue = stringOrNull(custom.theme?.extend?.colors?.[colorName]);

  return {
    ...ds.theme?.extend?.colors?.[colorName],
    ...custom.theme?.extend?.colors?.[colorName],
    ...(defaultValue ? { DEFAULT: defaultValue } : {})
  };
}

/**
 * Generate a color gradients from a color hue.
 *
 * @see https://blog.logrocket.com/building-color-palette-css/ for inspiration.
 */
function generateColorGradients(colorName) {
  return {
    DEFAULT: `hsl(var(--color-${colorName}), <alpha-value>)`,
    '50': `hsl(var(--color-${colorName}-hue), 55%, 90%, <alpha-value>)`,
    '100': `hsl(var(--color-${colorName}-hue), 55%, 85%, <alpha-value>)`,
    '200': `hsl(var(--color-${colorName}-hue), 55%, 80%, <alpha-value>)`,
    '300': `hsl(var(--color-${colorName}-hue), 55%, 75%, <alpha-value>)`,
    '400': `hsl(var(--color-${colorName}-hue), 65%, 65%, <alpha-value>)`,
    '500': `hsl(var(--color-${colorName}-hue), 65%, 55%, <alpha-value>)`,
    '600': `hsl(var(--color-${colorName}-hue), 75%, 45%, <alpha-value>)`,
    '700': `hsl(var(--color-${colorName}-hue), 75%, 40%, <alpha-value>)`,
    '800': `hsl(var(--color-${colorName}-hue), 75%, 35%, <alpha-value>)`,
    '900': `hsl(var(--color-${colorName}-hue), 75%, 25%, <alpha-value>)`,
  };
}

function stringOrNull(value) {
  return typeof value === 'string' ? value : null;
}
