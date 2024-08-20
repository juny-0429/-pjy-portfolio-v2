import colors from '../theme/colors';
import media from '../theme/media';

declare module '@emotion/react' {
  export interface Theme {
    media: typeof media;
    colors: typeof colors;
  }
}
