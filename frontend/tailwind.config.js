/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0.875rem',
        sm: '0.875rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    colors: {
      'dark': {
        DEFAULT: '#272937',
        '500': '#272937',
        '400': '#272937bf',
        '300': '#27293759',
        '200': '#2729371f',
        '100': '#2729370d',
      },
      'light':{
        DEFAULT: '#FFFFFF',
        '500': '#FFFFFF',
        '400': '#ffffffed',
        '300': '#ffffffa6',
        '200': '#ffffff59',
        '100': '#ffffff33',
        '50': '#ffffff1a',
      },
      'primary': {
        DEFAULT: '#0066FF',
        '500': '#F0FDFA',
        '400': '#005CE5',
        '300': '#3385FF',
      },
      'danger': {
        DEFAULT: '#FF3A30',
      },
      'warning': {
        DEFAULT: '#FFB649',
      },
      'success': {
        DEFAULT: '#48B527',
      },
      'white': '#FFFFFF',
      'black': '#000000',
      'transparent': 'transparent'
    },

    fontFamily: {
      sans: ['europa', 'sans-serif']
    },
    fontSize: {
      'heading-xl': ['2.286rem', {
        lineHeight: '2.57rem',
        letterSpacing: '-0.007rem',
      }],
      'heading-medium': ['1.43rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.006rem',
      }],
      'heading-small': ['1.14rem', {
        lineHeight: '1.7rem',
        letterSpacing: '-0.004rem',
      }],
      'base': ['1rem', {
        lineHeight: '1.43rem',
        letterSpacing: '-0.007rem',
      }],
      'base-small': ['0.86rem', {
        lineHeight: '1.14rem',
        letterSpacing: '-0.007rem',
      }],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
      'large': '12px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '8': '8px',
    },

    extend: {
      boxShadow: {
        'button-shade': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
      maxWidth: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}