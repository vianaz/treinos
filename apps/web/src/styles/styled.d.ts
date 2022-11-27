/* eslint-disable @typescript-eslint/no-empty-interface */
import { themeLight } from '@themes';

declare module 'styled-components' {
  type Theme = typeof themeLight;

  export interface DefaultTheme extends Theme {}
}
