import css, { get } from '@styled-system/css';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  system,
  typography,
} from 'styled-system';

export const variant = (component: string) => (props: any) =>
  css(get(props.theme, `Components.${component}.${props.variant}`, {}))(
    props.theme
  );

export const styledx = compose(
  space,
  typography,
  flexbox,
  grid,
  background,
  border,
  layout,
  color,
  position,
  system({
    marginEnd: { property: 'marginInlineEnd', scale: 'space' },
    marginStart: { property: 'marginInlineStart', scale: 'space' },
    paddingEnd: { property: 'paddingInlineEnd', scale: 'space' },
    paddingStart: { property: 'paddingInlineStart', scale: 'space' },
    bgColor: { property: 'backgroundColor', scale: 'colors' },
    bgGradient: { property: 'backgroundImage' },
    bgClip: { property: 'backgroundClip' },
    textTransform: { property: 'textTransform' },
    textDecoration: { property: 'textDecoration' },
    gap: { property: 'gap' },
    bgImage: { property: 'backgroundImage' },
    bgSize: { property: 'backgroundSize' },
    bgPosition: { property: 'backgroundPosition' },
    bgRepeat: { property: 'backgroundRepeat' },
    bgAttachment: { property: 'backgroundAttachment' },
    animation: { property: 'animation' },
    appearance: { property: 'appearance' },
    content: { property: 'content' },
    transform: { property: 'transform' },
    transformOrigin: { property: 'transformOrigin' },
    visibility: { property: 'visibility' },
    whiteSpace: { property: 'whiteSpace' },
    userSelect: { property: 'userSelect' },
    pointerEvents: { property: 'pointerEvents' },
    wordBreak: { property: 'wordBreak' },
    overflowWrap: { property: 'overflowWrap' },
    textOverflow: { property: 'textOverflow' },
    boxSizing: { property: 'boxSizing' },
    cursor: { property: 'cursor' },
    resize: { property: 'resize' },
    transition: { property: 'transition' },
    filter: { property: 'filter' },
    objectFit: { property: 'objectFit' },
    objectPosition: { property: 'objectPosition' },
    float: { property: 'float' },
    fill: { property: 'fill' },
    stroke: { property: 'stroke' },
    outline: { property: 'outline' },
  })
);

// eslint-disable-next-line
type PseudoF = (props: any) => Record<string, any>;

const PseudoParsers: Record<string, PseudoF> = {
  _active: (props: any) => ({ '&:active': parser(props) }),
  _checked: (props: any) => ({ '&[data-checked=true]': parser(props) }),
  _focusWithin: (props: any) => ({ '&:focus-within': parser(props) }),
  _hover: (props: any) => ({ '&:hover': parser(props) }),
  _open: (props: any) => ({ '&[data-open=true]': parser(props) }),
};

export function parser(props: any) {
  const theme = props.theme || {};

  // apply default styled props
  let styles = styledx(props);

  // filter pseudo props
  const pseudos = Array.from(
    Object.keys(props).filter((prop) =>
      ['_active', '_checked', '_focusWithin', '_hover', '_open'].includes(prop)
    )
  );

  // apply pseudo props
  if (pseudos.length) {
    for (const index in pseudos) {
      const pseudo = pseudos[index];
      const pseudoProps = Object.assign({}, props[pseudo], { theme });
      const styleF = PseudoParsers[pseudo];

      styles = Object.assign({}, styles, styleF(pseudoProps));
    }
  }

  return styles;
}

export const shouldForwardProp = createShouldForwardProp(
  styledx.propNames || []
);
