import { ReactNode } from 'react';

import { Copyright, ProgressBar } from '@todo/ui';

import { DashboardContainer } from './components/DashboardContainer';
import { DashboardMain } from './components/DashboardMain';
import { DashboardNavbar } from './components/DashboardNavbar';

const AUTHOR = process.env.NEXT_PUBLIC_AUTHOR;
const AUTHOR_URL = process.env.NEXT_PUBLIC_AUTHOR_URL;

export type DashboardLayoutProps = {
  children?: ReactNode;

  isLoading?: boolean;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  isLoading,
}) => (
  <>
    <DashboardNavbar />
    <DashboardMain>
      <ProgressBar isLoading={isLoading} />
      <DashboardContainer>{children}</DashboardContainer>
      <Copyright author={AUTHOR} authorUrl={AUTHOR_URL} />
    </DashboardMain>
  </>
);
