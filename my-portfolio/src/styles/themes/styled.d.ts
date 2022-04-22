import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      accent: string;
      background: string;
      text: string;
      shadow: string;
    }
  }
}
