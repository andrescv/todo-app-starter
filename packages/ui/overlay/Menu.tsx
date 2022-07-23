import initials from 'initials';
import React from 'react';
import { BiLogOut, BiMenu } from 'react-icons/bi';
import { usePopper } from 'react-popper';
import { useOutsideClick } from 'rooks';

import { Button, IconButton } from '../forms';
import { Box, Flex } from '../layout';
import { Text } from '../typography';

export type MenuProps = {
  fullName?: string;
  onSignOutClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Menu: React.FC<MenuProps> = ({ fullName, onSignOutClick }) => {
  const [open, setOpen] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);
  const elementRef = React.useState<HTMLButtonElement | null>(null);
  const popperRef = React.useState<HTMLDivElement | null>(null);
  const arrowRef = React.useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = arrowRef;
  const [referenceElement, setReferenceElement] = elementRef;
  const [popperElement, setPopperElement] = popperRef;

  useOutsideClick(ref, () => setOpen(false));

  const handleMenuClick = React.useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 12],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrowElement,
        },
      },
      {
        name: 'flip',
        enabled: false,
      },
    ],
  });

  return (
    <Flex
      ref={ref}
      position="relative"
      alignItems="center"
      justifyContent="center"
      boxSizing="border-box"
      size="2.5rem"
    >
      <IconButton
        type="button"
        variant="menu"
        aria-label="Menu"
        ref={setReferenceElement}
        onClick={handleMenuClick}
      >
        <BiMenu />
      </IconButton>
      <Flex
        data-open={open}
        flexDirection="column"
        alignItems="center"
        width="10rem"
        padding="1rem"
        bg="gray"
        borderRadius="md"
        boxShadow="0px 10px 30px rgba(38, 51, 77, 0.05)"
        ref={setPopperElement}
        style={styles.popper}
        visibility="hidden"
        opacity="0"
        transition="all 0.1s ease-out"
        _open={{ visibility: 'visible', opacity: '1' }}
        {...attributes.popper}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          size="3.5rem"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="purple"
          borderRadius="full"
        >
          <Text
            fontWeight="bold"
            fontSize="text.xs"
            lineHeight="2"
            color="white"
          >
            {fullName ? initials(fullName) : 'ME'}
          </Text>
        </Flex>
        <Button
          type="button"
          variant="logout"
          marginTop="1rem"
          rightIcon={<BiLogOut />}
          onClick={onSignOutClick}
        >
          Sign Out
        </Button>
        <Box
          ref={setArrowElement}
          style={styles.arrow}
          width="0"
          height="0"
          top="-0.4rem"
          borderLeft="20px solid transparent"
          borderRight="20px solid transparent"
          borderBottomWidth="20px"
          borderBottomStyle="solid"
          borderBottomColor="gray"
        />
      </Flex>
    </Flex>
  );
};
