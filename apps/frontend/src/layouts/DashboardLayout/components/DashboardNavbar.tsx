import Image from 'next/image';

import { Box, Flex, Menu } from '@todo/ui';

import Logo from '~public/logo.png';

export const DashboardNavbar: React.FC = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={['1rem', '1.5rem']}
      left="0"
      width="full"
      height="4rem"
      padding={['0 1rem', '0 4rem']}
    >
      <Flex as="nav" alignItems="center" size="full">
        <Image
          src={Logo}
          width={50}
          height={50}
          quality={100}
          alt="TODO app"
          draggable={false}
          placeholder="blur"
          objectFit="contain"
          objectPosition="center"
        />
        <Box flexGrow="1" />
        <Menu />
      </Flex>
    </Box>
  );
};
