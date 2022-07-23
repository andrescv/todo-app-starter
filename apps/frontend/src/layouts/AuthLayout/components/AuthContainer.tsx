import { ReactNode } from 'react';

import { Flex } from '@todo/ui';

export type AuthContainerProps = {
  children?: ReactNode;
};

export const AuthContainer: React.FC<AuthContainerProps> = ({
  children,
  ...props
}) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    width={['18rem', '20rem']}
    flexGrow="1"
    {...props}
  >
    {children}
  </Flex>
);
