import styled from '@emotion/styled';
import React from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

import { theme } from '../theme';

const InputContainer = styled.div<PasswordProps>`
  display: inline-flex;
  box-sizing: border-box;
  width: 100%;
  background: ${theme.colors.gray};
  border-radius: 0.625rem;
  transition: all 0.2s ease-out;
  box-shadow: 0 0 0 2px
    ${(props) => (props.isInvalid ? theme.colors.red : theme.colors.lightGray)};

  &:focus-within {
    box-shadow: 0 0 0 2px
      ${(props) => (props.isInvalid ? theme.colors.red : theme.colors.purple)};
  }
`;

const Input = styled.input<PasswordProps>`
  display: inline-flex;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 0.75rem;
  color: ${theme.colors.white};
  background: ${theme.colors.gray};
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.text.xs};
  line-height: ${theme.lineHeights['2']};
  border-radius: 0.625rem;

  &::placeholder {
    color: ${(props) =>
      props.isInvalid ? theme.colors.red : theme.colors.blueGray};
  }

  @media screen and (min-width: ${theme.breakpoints.md}) {
    padding: 1rem;
    font-size: ${theme.fontSizes.text.sm};
  }
`;

const ShowHideButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  box-sizing: border-box;
  width: 3rem;
  color: ${theme.colors.blueGray};

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export type PasswordProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  'as' | 'type'
> & {
  isInvalid?: boolean;
};

export const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  ({ isInvalid, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    const handleShowHidePasswordClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setShow((show) => !show);
      },
      []
    );

    return (
      <InputContainer isInvalid={isInvalid}>
        <Input
          ref={ref}
          isInvalid={isInvalid}
          type={show ? 'text' : 'password'}
          {...props}
        />
        <ShowHideButton
          tabIndex={-1}
          type="button"
          aria-label={show ? 'Hide password' : 'Show password'}
          onClick={handleShowHidePasswordClick}
        >
          {!show && <BiShow />}
          {show && <BiHide />}
        </ShowHideButton>
      </InputContainer>
    );
  }
);

Password.displayName = 'Password';
