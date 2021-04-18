import '@emotion/react';
import { Theme as HakkeroTheme } from '@hakkero/util/theme';

declare module '@emotion/react' {
  export interface Theme extends HakkeroTheme {}
}
