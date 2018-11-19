import { Scale, styled, css, fns } from "src/theme";
import { getP, getProperty, getLiteral, getWithDirections } from "./getters";
import { prop } from "ramda";

// directions map
const dps = [
  {dir: "left", l: ["l","x",""]},
  {dir: "right", l: ["r","x",""]},
  {dir: "top", l: ["t","y",""]},
  {dir: "bottom", l: ["b","y",""]},
];

const getDirectionalProperty = getWithDirections(dps)(fns.space);
const getPadding = getDirectionalProperty("padding");
const getMargins = getDirectionalProperty("margin");

const getFromColor = getProperty(fns.color);
const getBackground = getFromColor(prop("bg"))("background");
const getColor = getFromColor(prop("color"))("color");
const getBorderColor = getFromColor(prop("borderColor"))("border-color");
const getBorderLeftColor = getFromColor(prop("blc"))("border-left-color");
const getBorderRightColor = getFromColor(prop("brc"))("border-right-color");
const getBorderTopColor = getFromColor(prop("btc"))("border-top-color");
const getBorderBottomColor = getFromColor(prop("bbc"))("border-bottom-color");

const getBoxShadow = getProperty(fns.shadow)(prop("shadow"))("box-shadow");
//const getBorder = getProperty(fns.border)(prop("border"))("border");
const getBorder = getWithDirections(dps)(fns.border)("border");
const getBorderRadius = getProperty(fns.radius)(prop("radius"))("border-radius");

const getFontWeight = getProperty(fns.fontWeight)(prop("fontWeight"))("font-weight");
const getFontFamily = getProperty(fns.fontFamily)(prop("fontFamily"))("font-family");

const getLineHeight = getProperty(fns.lineHeight)(prop("lineHeight"))("line-height");
const getLetterSpacing = getProperty(fns.letterSpacing)(prop("letterSpacing"))("letter-spacing");
const getTextTransform = getLiteral(prop("textTransform"))("text-transform");
const getTextAlign = getLiteral(prop("textAlign"))("text-align");

const getResponsive = getP((property: string, vals: any[], fn: any, theme: any) =>
  vals.map((v, i) => `${theme.devices[i]} { ${property}: ${fn(v)} }`));

type Width = string | number;
const parseWidth = (v: Width) => (typeof v === "number" ? `${v * 100}%` : v);
const getWidth = getResponsive(parseWidth)(prop("width"))("width");

const getFontSize = getResponsive(fns.fontSize)(prop("fontSize"))("font-size");

interface SpaceProps {
  p?: Scale;
  px?: Scale;
  py?: Scale;
  pr?: Scale;
  pl?: Scale;
  pt?: Scale;
  pb?: Scale;
  m?: Scale;
  mx?: Scale;
  my?: Scale;
  mr?: Scale;
  ml?: Scale;
  mt?: Scale;
  mb?: Scale;
}

const space = css<SpaceProps>`
  ${props => css`
     ${getPadding(props)}
     ${getMargins(props)}
    `
  }
`;

interface BoxProps extends SpaceProps {
  bg?: string;
  color?: string;
  width?: number[] | string[];
}

interface FlexProps extends BoxProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  spacing?: Scale;
}

interface CardProps extends FlexProps {
  shadow?: Scale;
  radius?: Scale;
  b?: Scale;
  br?: Scale;
  bl?: Scale;
  bt?: Scale;
  bb?: Scale;
  bx?: Scale;
  by?: Scale;
  blc?: string;
  brc?: string;
  btc?: string;
  bbc?: string;
  borderColor?: string;
}

interface ButtonProps extends BoxProps{
  shadow?: Scale;
  radius?: Scale;
  b?: Scale;
  borderColor?: string;
  fontFamily?: string;
  fontSize?: Scale[];
  fontWeight?: Scale;
  textTransform?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

interface TextProps extends BoxProps {
  fontFamily?: string;
  fontSize?: Scale[];
  fontWeight?: Scale;
  shadow?: Scale;
  textTransform?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

const box = css<BoxProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  ${space}
  ${props => css`
    ${getBackground(props)};
    ${getColor(props)};
    ${getWidth(props)};
    `
  }
`;

const flex = css<FlexProps>`
  display: flex;
  ${props => (props.spacing && props.spacing > 0) && css`
    padding: ${props.theme.sizes[(props.spacing)]};
    & > * {
      padding: ${props.theme.sizes[(props.spacing)]};
    }
  `}
  ${box}
  ${props => css`
    ${getLiteral(prop("flexDirection"))("flex-direction")(props)}
    ${getLiteral(prop("flexWrap"))("flex-wrap")(props)}
    ${getLiteral(prop("justifyContent"))("justify-content")(props)}
    ${getLiteral(prop("alignItems"))("align-items")(props)}
  `}
`;

const card = css<CardProps>`
  overflow: hidden;
  flex-direction: column;
  ${flex}
  ${props => css`
    ${getBoxShadow(props)}
    ${getBorder(props)}
    ${getBorderColor(props)}
    ${getBorderLeftColor(props)}
    ${getBorderRightColor(props)}
    ${getBorderTopColor(props)}
    ${getBorderBottomColor(props)}
    ${getBorderRadius(props)}
  `}
`;

const text = css<TextProps>`
  font-family: ${props => props.theme.fonts.sans};
  ${box}
  ${props => css`
    ${getFontSize(props)}
    ${getFontWeight(props)}
    ${getFontFamily(props)}
    ${getLineHeight(props)}
    ${getLetterSpacing(props)}
    ${getTextTransform(props)}
    ${getTextAlign(props)}
  `}
`;

const button = css<ButtonProps>`
  font-family: ${props => props.theme.fonts.sans};
  text-decoration: none;
  cursor: pointer;
  ${box}
  ${props => css`
    ${getBoxShadow(props)}
    ${getBorder(props)}
    ${getBorderColor(props)}
    ${getBorderRadius(props)}
    ${getFontSize(props)}
    ${getFontWeight(props)}
    ${getFontFamily(props)}
    ${getLineHeight(props)}
    ${getLetterSpacing(props)}
    ${getTextTransform(props)}
  `}
`;

export const Box = styled.div<BoxProps>`${box}`;
export const Flex = styled.div<FlexProps>`${flex}`;
export const Card = styled.div<CardProps>`${card}`;
export const Text = styled.p<TextProps>`${text}`;
export const Button = styled.button<ButtonProps>`${button}`;

export {
  BoxProps, FlexProps, TextProps, CardProps, ButtonProps
}
