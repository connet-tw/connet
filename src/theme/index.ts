import baseStyled, { css as baseCss, ThemedCssFunction, ThemedStyledInterface } from "styled-components";
import { shadows } from "./shadows";
import { colors } from "./colors";
import { unit } from "./utils";
import { pathOr } from "ramda";

const fonts = {
  sans: "Muli",
  serif: "serif",
};

export type Scale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const sizes = unit("px", [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]);
const fontSizes = unit("px", [ 12, 14, 16, 20, 24, 36, 48, 64, 72 ]);
const fontWeights = [100, 200, 300, 400, 500,600, 700, 800, 900];
const dimensions = unit("px", [16, 32, 64, 128, 256, 512, 768, 1024, 1536]);
const zIndexes = [0, 100, 200, 300, 400, 500, 600, 700, 800];
const borders = [0,1,2,3,4,5,6,7,8].map(n => `${n}px solid`);
const radii = unit("px", [0,2,4,8,16,32,64,128]);
const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

const letterSpacings = {
  normal: "normal",
  tracked: "0.1em",
  tight: "-0.05em",
  mega: "0.25em",
};

const space = (val: Scale) => sizes[val];
const fontSize = (val: Scale) => fontSizes[val];
const fontWeight = (val: Scale) => fontWeights[val];
const dimension = (val: Scale) => dimensions[val];
const shadow = (val: Scale) => shadows[val];
const zIndex = (val: Scale) => zIndexes[val];
const border = (val: Scale) => borders[val];
const radius = (val: Scale) => radii[val];
const fontFamily = (val: "sans" | "serif") => fonts[val];
const lineHeight = (val: "solid" | "title" | "copy") => lineHeights[val];
const letterSpacing = (val: "normal" | "tight" | "tracked" | "mega") => letterSpacings[val];

export const devices = [
  `@media (min-width: 0px)`,
  `@media (min-width: 425px)`,
  `@media (min-width: 768px)`,
  `@media (min-width: 1024px)`,
  `@media (min-width: 1440px)`,
];

const device = (val: number) => devices[val];

const maxWidth = 1440;

const media = (s: string, i: number) => `${devices[i]} { ${s} }`;
const color = (s: string) => pathOr(s, s.split("."), colors);

const theme = {
  color,
  border,
  radius,
  devices,
  device,
  dimension,
  fonts,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  maxWidth,
  media,
  space,
  shadow,
  zIndex,
};

export {
  theme,
  colors,
  space
};

export const styled = baseStyled as ThemedStyledInterface<typeof theme>;
export const css = baseCss as ThemedCssFunction<typeof theme>;
