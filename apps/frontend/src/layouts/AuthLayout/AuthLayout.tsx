import { ReactNode } from 'react';

import { Copyright, ProgressBar } from '@todo/ui';

import { AuthContainer } from './components/AuthContainer';
import { AuthLogo } from './components/AuthLogo';
import { AuthMain } from './components/AuthMain';

const AUTHOR = process.env.NEXT_PUBLIC_AUTHOR;
const AUTHOR_URL = process.env.NEXT_PUBLIC_AUTHOR_URL;

export type AuthLayoutProps = {
  children?: ReactNode;

  isLoading?: boolean;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  isLoading,
}) => (
  <AuthMain>
    <ProgressBar isLoading={isLoading} />
    <AuthLogo />
    <AuthContainer>{children}</AuthContainer>
    <Copyright author={AUTHOR} authorUrl={AUTHOR_URL} />
  </AuthMain>
);
