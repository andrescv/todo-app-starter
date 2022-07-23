import styled from '@emotion/styled';
import { ResponsiveValue } from 'styled-system';

import { parser, shouldForwardProp, StyleProps, variant } from '../system';

export type IconButtonProps = StyleProps &
  Omit<React.HTMLProps<HTMLButtonElement>, keyof StyleProps> & {
    variant?: ResponsiveValue<'ghost' | 'menu'>;
  };

export const IconButton: React.FC<IconButtonProps> = styled('button', {
  shouldForwardProp,
})(
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    minWidth: 0,
  },
  variant('IconButton'),
  parser
);
