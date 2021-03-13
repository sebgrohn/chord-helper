import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

// https://www.shutterstock.com/blog/art-deco-graphic-design-techniques
const goldColor = '#d1ad70'; // gold
const aquamarineColor = '#87ccb0'; // aquamarine
const turquoiseColor = '#91d4cf'; // light turquoise
const navyBlueColorColor = '#15173d'; // navy blue

const theme = deepMerge(grommet, {
  global: {
    colors: {
      background: '#010115', // x-darker navy blue
      'background-back': {
        dark: '#080920', // darker navy blue
        // light: '#EDEDED',
      },
      'background-front': {
        dark: navyBlueColorColor,
        // light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#3f438a17',
        // light: '#33333310',
      },

      black: '#00010d', // almost black navy blue
      white: '#fff9ef', // almost white gold

      brand: aquamarineColor,
      'accent-1': goldColor,

      border: {
        dark: '#d1ad7080', // semitransparent gold
        // light: '#d1ad7080',
      },
    },

    font: {
      family: '"Josefin Sans"',
      face:
        "/* vietnamese */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMlhLzTs.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMhhLzTs.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n" +
        "/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
  },

  heading: {
    font: {
      family: '"Limelight"',
    },
  },

  button: {
    border: {
      radius: '3px',
    },
  },

  card: {
    container: {
      border: 'solid',
      round: 'xxsmall',
      elevation: null,
    },
  },
});

export default theme;
