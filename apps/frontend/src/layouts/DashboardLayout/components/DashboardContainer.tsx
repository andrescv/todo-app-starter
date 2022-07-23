import { ReactNode } from 'react';

import { Flex } from '@todo/ui';

export type DashboardContainerProps = {
  children?: ReactNode;
};

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  children,
}) => (
  <Flex
    flexDirection="column"
    flexGrow="1"
    alignItems="center"
    width="full"
    paddingTop={['8rem', '12rem']}
    paddingBottom="4rem"
  >
    {children}
  </Flex>
);
