import Logo from '@public/logo.png';
import Image from 'next/image';

import { Box } from '@todo/ui';

export const AuthLogo: React.FC = () => (
  <Box marginTop={['8rem', '12rem']}>
    <Image
      src={Logo}
      width={100}
      height={100}
      quality={100}
      alt="TODO app"
      draggable={false}
      placeholder="blur"
      objectFit="contain"
      objectPosition="center"
    />
  </Box>
);
