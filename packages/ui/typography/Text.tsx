import styled from '@emotion/styled';

import { parser, shouldForwardProp, StyleProps } from '../system';

export type TextProps = StyleProps &
  Omit<React.HTMLProps<HTMLParagraphElement>, keyof StyleProps>;

export const Text: React.FC<TextProps> = styled('p', {
  shouldForwardProp,
})(
  {
    fontFamily: "'Monda', sans-serif",
    fontWeight: 400,
    boxSizing: 'border-box',
    minWidth: 0,
  },
  parser
);
