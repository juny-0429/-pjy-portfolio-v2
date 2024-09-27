import media from '../theme/media';
import colors from '../theme/colors';

declare module '@emotion/react' {
  export interface Theme {
    media: typeof media;
    colors: typeof colors;
  }
}
