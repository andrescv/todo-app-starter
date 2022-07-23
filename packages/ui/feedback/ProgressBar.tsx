import { keyframes } from '@emotion/react';
import React from 'react';

import { Box } from '../layout';

const LoadingAnimation = keyframes`
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
`;

export type ProgressBarProps = {
  isLoading?: boolean;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ isLoading }) => (
  <Box width="full" height="0.25rem" bg="transparent" overflow="hidden">
    <Box
      size="full"
      bg={isLoading ? 'purple' : 'transparent'}
      animation={`${LoadingAnimation} 1s infinite`}
      transformOrigin="0% 50%"
    />
  </Box>
);
