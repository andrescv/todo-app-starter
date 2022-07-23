export const Button = {
  solid: {
    'width': 'full',
    'padding': ['0.75rem', '1rem'],
    'color': 'white',
    'backgroundImage': `linear-gradient(to right, #8133f1 0%, #6200ee 50%, #8133f1 100%)`,
    'fontFamily': 'body',
    'fontWeight': 'bold',
    'fontSize': ['text.xs', 'text.sm'],
    'lineHeight': '2',
    'textAlign': 'center',
    'transition': `background-position 0.5s ease-out, box-shadow 0.2s ease-out`,
    'backgroundSize': '200% auto',
    'borderRadius': 'md',
    '&:hover': {
      backgroundPosition: 'right center',
      textDecoration: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 2px #111827, 0 0 0 4px #5900d9',
    },
  },
  logout: {
    width: 'fit-content',
    padding: '0.3rem 0.5rem',
    fontFamily: 'body',
    fontWeight: 'bold',
    fontSize: 'text.xs',
    lineHeight: '2',
    borderRadius: 'md',
    color: 'white',
  },
};
