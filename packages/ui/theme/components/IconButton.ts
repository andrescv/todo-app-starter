export const IconButton = {
  ghost: {
    'padding': '0.5rem',
    'borderRadius': 'md',
    'transition': 'all 0.2s ease-out',
    '&:active': {
      bg: 'lightGray',
    },
  },
  menu: {
    'color': 'blueGray',
    'width': 'full',
    'height': 'full',
    'bg': 'gray',
    'padding': '0.5rem',
    'borderRadius': 'md',
    'transition': 'all 0.2s ease-out',
    '&:active': {
      bg: 'lightGray',
    },
    '&:focus': {
      boxShadow: '0 0 0 2px #111827, 0 0 0 4px #5900d9',
    },
  },
};
