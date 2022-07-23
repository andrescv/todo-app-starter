import React from 'react';

import { Text } from '../typography';

export type CopyrightProps = {
  author?: string;
  authorUrl?: string;
};

export const Copyright: React.FC<CopyrightProps> = ({
  author = 'me',
  authorUrl = 'https://github.com',
}) => (
  <Text
    fontWeight="normal"
    fontSize="text.xs"
    lineHeight="1"
    color="blueGray"
    userSelect="none"
  >
    {`Copyright © ${new Date().getFullYear()} `}
    <a href={authorUrl} target="_blank" rel="noopener noreferrer">
      {author}
    </a>
  </Text>
);
