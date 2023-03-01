// AppTheme is basic type for the themes based on dark theme
import { createTheme } from "@nextui-org/react"

export type AppTheme = typeof dark;

const dark = {
  name: "dark",
  background: "#5e5c64",
  components: {
    background: "#7a7880",
    shadow1: "#504e55",
    shadow2: "#6c6a73",
    active: "#e4ebf5",
    nonActive: "#9baacf",
    primary: "#6d5dfc",
    danger: "#dc3545e6",
    warning: "#ffca2ce6;",
  },
  font: {
    regular: "#E4EBF5e6",
    button: "#E4EBF5e6",
    placeholder: "#bec8e4",
    warning: "#5e5c64e6",
    valid: "#6FF173",
    invalid: "#FFCCD0",
    logo: "#ff9933",
    logoShadow1: "#fed028",
    logoShadow2: "#880f22",
  },
};

const light: AppTheme = {
  name: "light",
  background: "#e4ebf5",
  components: {
    background: "#DEE7F2",
    shadow1: "#c8d0e7",
    shadow2: "#FFFFFF",
    active: "#e4ebf5",
    nonActive: "#9baacf",
    primary: "#6d5dfc",
    danger: "#dc3545e6",
    warning: "#ffca2ce6;",
  },
  font: {
    regular: "#504e55e6",
    button: "#E4EBF5e6",
    placeholder: "#504e55e6",
    warning: "#504e55e6",
    valid: "#1F784E",
    invalid: "#BF3845",
    logo: "#a8c2e6",
    logoShadow1: "#000000",
    logoShadow2: "#6d5dfc",
  },

};

export const Themes: Record<string, AppTheme> = { dark, light };


export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      // generic colors
      white: '#ffffff',
      black: '#000000',

      // background colors (light)
      background: "#DEE7F2",
      backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "$black",
      backgroundContrast: "#DEE7F2",


      //semantic colors (light)
      blue50: '#EDF5FF',
      // ...
      blue900: '#00254D',
      // ...

      // brand colors
      primaryLight: '$blue200',
      primaryLightHover: '$blue300', // commonly used on hover state
      primaryLightActive: '$blue400', // commonly used on pressed state
      primaryLightContrast: '$blue600', // commonly used for text inside the component
      primary: '$blue600',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white', // commonly used for text inside the component
      primaryShadow: '$blue500'

      // ... rest of colors (secondary, success, warning, error, etc)
    },
    fonts: {
      sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans- serif; ",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'`
    },
    fontSizes: {
      xs: '0.75rem', /* 12px */
      sm: '0.875rem', /* 14px */
      base: '1rem', /* 16px */
      md: '1rem', /* 16px */
      lg: '1.125rem', /* 18px */
      xl: '1.25rem', /* 20px */
      '2xl': '1.5rem', /* 24px */
      '3xl': '1.875rem', /* 30px */
      '4xl': '2.25rem', /* 36px */
      '5xl': '3rem', /* 48px */
      '6xl': '3.75rem', /* 60px */
      '7xl': '4.5rem', /* 72px */
      '8xl': '6rem', /* 96px */
      '9xl': '8rem', /* 128px */
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      xs: 1, /* 16px */
      sm: 1.25, /* 20px */
      base: 1.5, /* 24px */
      md: 1.5, /* 24px */
      lg: 1.75, /* 28px */
      xl: 1.75, /* 28px */
      '2xl': 2, /* 32px */
      '3xl': 2.25, /* 36px */
      '4xl': 2.5, /* 40px */
      '5xl': 1, /* 16px */
      '6xl': 1, /* 16px */
      '7xl': 1, /* 16px */
      '8xl': 1, /* 16px */
      '9xl': 1 /* 16px */
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    radii: {
      xs: '7px',
      sm: '9px',
      md: '12px',
      base: '14px',
      lg: '14px', // preferred value by NextUI components
      xl: '18px',
      '2xl': '24px',
      '3xl': '32px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px',
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px'
    },
  }
})

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // generic colors
      white: '#ffffff',
      black: '#000000',

      // background colors (light)
      background: "#7a7880",
      backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "$white",
      backgroundContrast: "#7a7880",


      //semantic colors (light)
      blue50: '#EDF5FF',
      // ...
      blue900: '#00254D',
      // ...

      // brand colors
      primaryLight: '$blue200',
      primaryLightHover: '$blue300', // commonly used on hover state
      primaryLightActive: '$blue400', // commonly used on pressed state
      primaryLightContrast: '$blue600', // commonly used for text inside the component
      primary: '$blue600',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white', // commonly used for text inside the component
      primaryShadow: '$blue500'

      // ... rest of colors (secondary, success, warning, error, etc)
    },
    fonts: {
      sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans- serif; ",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'`
    },
    fontSizes: {
      xs: '0.75rem', /* 12px */
      sm: '0.875rem', /* 14px */
      base: '1rem', /* 16px */
      md: '1rem', /* 16px */
      lg: '1.125rem', /* 18px */
      xl: '1.25rem', /* 20px */
      '2xl': '1.5rem', /* 24px */
      '3xl': '1.875rem', /* 30px */
      '4xl': '2.25rem', /* 36px */
      '5xl': '3rem', /* 48px */
      '6xl': '3.75rem', /* 60px */
      '7xl': '4.5rem', /* 72px */
      '8xl': '6rem', /* 96px */
      '9xl': '8rem', /* 128px */
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      xs: 1, /* 16px */
      sm: 1.25, /* 20px */
      base: 1.5, /* 24px */
      md: 1.5, /* 24px */
      lg: 1.75, /* 28px */
      xl: 1.75, /* 28px */
      '2xl': 2, /* 32px */
      '3xl': 2.25, /* 36px */
      '4xl': 2.5, /* 40px */
      '5xl': 1, /* 16px */
      '6xl': 1, /* 16px */
      '7xl': 1, /* 16px */
      '8xl': 1, /* 16px */
      '9xl': 1 /* 16px */
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    radii: {
      xs: '7px',
      sm: '9px',
      md: '12px',
      base: '14px',
      lg: '14px', // preferred value by NextUI components
      xl: '18px',
      '2xl': '24px',
      '3xl': '32px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px',
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px'
    },
  }
})