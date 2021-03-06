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
