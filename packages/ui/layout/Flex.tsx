import styled from '@emotion/styled';

import { parser, shouldForwardProp, StyleProps } from '../system';

export type FlexProps = StyleProps &
  Omit<React.HTMLProps<HTMLDivElement>, keyof StyleProps>;

export const Flex: React.FC<FlexProps> = styled('div', {
  shouldForwardProp,
})(
  {
    display: 'flex',
    boxSizing: 'border-box',
    minWidth: 0,
  },
  parser
);
