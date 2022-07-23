import styled from '@emotion/styled';

import { parser, shouldForwardProp, StyleProps } from '../system';

export type BoxProps = StyleProps &
  Omit<React.HTMLProps<HTMLDivElement>, keyof StyleProps>;

export const Box: React.FC<BoxProps> = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  parser
);
