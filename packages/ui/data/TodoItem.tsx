import React from 'react';
import { BiCheck, BiTrash } from 'react-icons/bi';

import { IconButton } from '../forms';
import { Flex } from '../layout';
import { Text } from '../typography';

export type TodoItemProps = {
  todo: string;
  isComplete?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onDeleteClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  isComplete,
  onClick,
  onDeleteClick,
}) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    width={{ sm: '20rem', md: '28rem' }}
    height="4rem"
    paddingX={{ sm: '0.625rem', md: '1rem' }}
    bg="gray"
    borderRadius="md"
  >
    <Flex
      role="button"
      alignItems="center"
      flexGrow="1"
      height="full"
      cursor="pointer"
      onClick={onClick}
    >
      <Flex
        data-checked={isComplete}
        alignItems="center"
        justifyContent="center"
        width={['1.5rem', '2rem']}
        minWidth={['1.5rem', '2rem']}
        height={['1.5rem', '2rem']}
        color="white"
        bg="transparent"
        border="2px solid #e600fa"
        borderRadius="full"
        _checked={{
          background: 'linear-gradient(to right, #e600fa 0%, #5261ea 100%)',
          border: '2px solid #25273c',
        }}
      >
        {isComplete && <BiCheck />}
      </Flex>
      <Text
        data-checked={isComplete}
        maxWidth={['13rem', '20rem']}
        fontWeight="bold"
        fontSize="text.xs"
        lineHeight="2"
        color="white"
        marginLeft="1rem"
        transition="all 0.2s ease-out"
        userSelect="none"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        _checked={{ color: 'blue', textDecoration: 'line-through' }}
      >
        {todo}
      </Text>
    </Flex>
    <IconButton
      aria-label="Delete Todo"
      variant="ghost"
      color="red"
      onClick={onDeleteClick}
    >
      <BiTrash />
    </IconButton>
  </Flex>
);
