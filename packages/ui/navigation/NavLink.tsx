import styled from '@emotion/styled';

import { parser, shouldForwardProp, StyleProps } from '../system';

export type NavLinkProps = StyleProps &
  Omit<React.HTMLProps<HTMLParagraphElement>, keyof StyleProps>;

export const NavLink: React.FC<NavLinkProps> = styled('a', {
  shouldForwardProp,
})(
  {
    fontFamily: "'Monda', sans-serif",
    fontWeight: 400,
    boxSizing: 'border-box',
  },
  parser
);
