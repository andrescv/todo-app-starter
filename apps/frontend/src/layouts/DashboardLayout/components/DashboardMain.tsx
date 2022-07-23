import { ReactNode } from 'react';

import { Flex } from '@todo/ui';

export type DashboardMainProps = {
  children?: ReactNode;
};

export const DashboardMain: React.FC<DashboardMainProps> = ({ children }) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    width="full"
    minHeight="h-screen"
    paddingBottom="1rem"
    bg="surface"
  >
    {children}
  </Flex>
);
