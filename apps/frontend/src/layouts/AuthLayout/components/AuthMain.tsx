import { ReactNode } from 'react';

import { Flex } from '@todo/ui';

export type AuthMainProps = {
  children?: ReactNode;
};

export const AuthMain: React.FC<AuthMainProps> = ({ children }) => (
  <Flex
    as="main"
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
