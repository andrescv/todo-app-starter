import styled from '@emotion/styled';
import React from 'react';
import { ResponsiveValue } from 'styled-system';

import { parser, shouldForwardProp, StyleProps, variant } from '../system';

const StyledButton = styled('button', { shouldForwardProp })(
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    minWidth: 0,
  },
  variant('Button'),
  parser
);

const LeftIconContainer = styled('span')({
  'display': 'inline-flex',
  'alignSelf': 'center',
  'flexShrink': 0,
  'marginInlineEnd': '1rem',
  '& > svg': {
    width: '1rem',
    height: '1rem',
  },
});

const RightIconContainer = styled('span')({
  'display': 'inline-flex',
  'alignSelf': 'center',
  'flexShrink': 0,
  'marginInlineStart': '1rem',
  '& > svg': {
    width: '1rem',
    height: '1rem',
  },
});

export type ButtonProps = StyleProps &
  Omit<React.HTMLProps<HTMLButtonElement>, keyof StyleProps> & {
    variant?: ResponsiveValue<'solid' | 'logout'>;

    leftIcon?: React.ReactNode;

    rightIcon?: React.ReactNode;
  };

export const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <StyledButton as="button" ref={ref} type="button" {...props}>
        {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        {children}
        {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
