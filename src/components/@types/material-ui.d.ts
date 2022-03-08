import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    negativeColor: string;
    iconColor: string;
  }

  interface CustomThemeOptions extends ThemeOptions {
    negativeColor?: string;
    iconColor?: string;
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
