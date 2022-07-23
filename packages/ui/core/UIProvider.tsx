import { ThemeProvider } from '@emotion/react';
import React from 'react';

import { theme } from '../theme';
import { CSSReset } from './CSSReset';

export type UIProviderProps = {
  children?: React.ReactNode;
};

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => (
  <>
    <CSSReset />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
