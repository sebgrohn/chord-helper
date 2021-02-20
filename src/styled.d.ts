import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    lineHeight: number;
    lineHeightRem: string;

    // colors: {
    //   main: string;
    //   secondary: string;
    // };
  }
}
