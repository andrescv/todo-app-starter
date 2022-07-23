import styled from '@emotion/styled';
import React from 'react';
import { ResponsiveValue } from 'styled-system';

import { parser, shouldForwardProp, StyleProps, variant } from '../system';

const StyledInput = styled('input', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  variant('Input'),
  parser
);

export type InputProps = StyleProps &
  Omit<React.HTMLProps<HTMLInputElement>, keyof StyleProps> & {
    type?: 'text' | 'email' | 'password';

    variant?: ResponsiveValue<'auth' | 'todo'>;

    isInvalid?: boolean;
  };

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ isInvalid = false, ...props }, ref) => (
  <StyledInput
    ref={ref}
    data-invalid={isInvalid}
    aria-invalid={isInvalid}
    {...props}
  />
));

Input.displayName = 'Input';
