export const Input = {
  auth: {
    'width': 'full',
    'padding': ['0.75rem', '1rem'],
    'color': 'white',
    'backgroundColor': 'gray',
    'fontFamily': 'body',
    'fontWeight': 'bold',
    'fontSize': ['text.xs', 'text.sm'],
    'lineHeight': '2',
    'outline': 'none',
    'borderRadius': 'md',
    'transition': 'all 0.2s ease-out',
    'boxShadow': '0 0 0 2px #2d3c59',
    '&:focus': {
      boxShadow: '0 0 0 2px #6200ee',
    },
    '&[data-invalid=true]': {
      boxShadow: '0 0 0 2px #ec407a',
    },
  },
};
