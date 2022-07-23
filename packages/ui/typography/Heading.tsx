import styled from '@emotion/styled';

import { parser, shouldForwardProp, StyleProps } from '../system';

export type HeadingProps = StyleProps &
  Omit<React.HTMLProps<HTMLHeadingElement>, keyof StyleProps>;

export const Heading: React.FC<HeadingProps> = styled('h2', {
  shouldForwardProp,
})(
  {
    fontFamily: "'Monda', sans-serif",
    fontWeight: 700,
    boxSizing: 'border-box',
    minWidth: 0,
  },
  parser
);
