import { Button } from './components/Button';
import { IconButton } from './components/IconButton';
import { Input } from './components/Input';
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { fontSizes } from './foundations/font-sizes';
import { fontWeights } from './foundations/font-weights';
import { fonts } from './foundations/fonts';
import { letterSpacings } from './foundations/letter-spacings';
import { lineHeights } from './foundations/line-heights';
import { radii } from './foundations/radii';
import { shadows } from './foundations/shadows';
import { sizes } from './foundations/sizes';
import { zIndices } from './foundations/z-indices';

export const theme = <const>{
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  zIndices,
  Components: {
    Button,
    IconButton,
    Input,
  },
};
