import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css';
import * as CSS from 'csstype';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
  ShadowProps,
  SpaceProps,
  TLengthStyledSystem,
  TypographyProps,
} from 'styled-system';

export type BaseProps = React.RefAttributes<any> & {
  as?: React.ElementType;
};

export type StyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<
          string,
          SystemStyleObject | ResponsiveStyleValue<number | string>
        >
    >;

export type PseudoProps = {
  _active?: StyleProp;
  _checked?: StyleProp;
  _focusWithin?: StyleProp;
  _hover?: StyleProp;
  _open?: StyleProp;
};

export type OtherProps = {
  marginEnd?: ResponsiveValue<CSS.Property.MarginInlineEnd>;
  marginStart?: ResponsiveValue<CSS.Property.MarginInlineStart>;
  paddingEnd?: ResponsiveValue<CSS.Property.PaddingInlineEnd>;
  paddingStart?: ResponsiveValue<CSS.Property.PaddingInlineStart>;
  bgColor?: ResponsiveValue<CSS.Property.BackgroundColor>;
  bgGradient?: ResponsiveValue<CSS.Property.BackgroundImage>;
  bgClip?: ResponsiveValue<CSS.Property.BackgroundClip>;
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>;
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>;
  gap?: ResponsiveValue<CSS.Property.Gap<TLengthStyledSystem>>;
  bgImage?: ResponsiveValue<CSS.Property.BackgroundImage>;
  bgSize?: ResponsiveValue<CSS.Property.BackgroundSize>;
  bgPosition?: ResponsiveValue<CSS.Property.BackgroundPosition>;
  bgRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat>;
  bgAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment>;
  animation?: ResponsiveValue<CSS.Property.Animation>;
  appearance?: ResponsiveValue<CSS.Property.Appearance>;
  content?: ResponsiveValue<CSS.Property.Content>;
  transform?: ResponsiveValue<CSS.Property.Transform>;
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin>;
  visibility?: ResponsiveValue<CSS.Property.Visibility>;
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>;
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap>;
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow>;
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing>;
  cursor?: ResponsiveValue<CSS.Property.Cursor>;
  resize?: ResponsiveValue<CSS.Property.Resize>;
  transition?: ResponsiveValue<CSS.Property.Transition>;
  filter?: ResponsiveValue<CSS.Property.Filter>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition>;
  float?: ResponsiveValue<CSS.Property.Float>;
  fill?: ResponsiveValue<CSS.Property.Fill>;
  stroke?: ResponsiveValue<CSS.Property.Stroke>;
  outline?: ResponsiveValue<CSS.Property.Outline>;
};

export type StyleProps = BaseProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  PseudoProps &
  OtherProps;
