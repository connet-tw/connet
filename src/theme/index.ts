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

const space = (theme: any) => (val: Scale) => theme.sizes[val];
const fontSize = (theme: any) => (val: Scale) => theme.fontSizes[val];
const fontWeight = (theme: any) => (val: Scale) => theme.fontWeights[val];
const dimension = (theme: any) => (val: Scale) => theme.dimensions[val];
const shadow = (theme: any) => (val: Scale) => theme.shadows[val];
const zIndex = (theme: any) => (val: Scale) => theme.zIndexes[val];
const border = (theme: any) => (val: Scale) => theme.borders[val];
const radius = (theme: any) => (val: Scale) => theme.radii[val];
const fontFamily = (theme: any) => (val: "sans" | "serif") => theme.fonts[val];
const lineHeight = (theme: any) => (val: "solid" | "title" | "copy") => theme.lineHeights[val];
const letterSpacing = (theme: any) => (val: "normal" | "tight" | "tracked" | "mega") => theme.letterSpacings[val];

export const devices = [
  `@media (min-width: 0px)`,
  `@media (min-width: 425px)`,
  `@media (min-width: 768px)`,
  `@media (min-width: 1024px)`,
  `@media (min-width: 1440px)`,
];

const maxWidth = 1440;

const media = (s: string, i: number) => `${devices[i]} { ${s} }`;

const color = (theme: any) => (s: string) => pathOr(s, s.split("."), theme.colors);

const theme = {
  sizes,
  colors,
  borders,
  radii,
  devices,
  dimensions,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  maxWidth,
  shadows,
  zIndexes,
};

const fns = {
  color,
  border,
  radius,
  devices,
  dimension,
  fonts,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  media,
  space,
  shadow,
  zIndex,
};

export {
  theme,
  fns,
};

export const styled = baseStyled as ThemedStyledInterface<typeof theme>;
export const css = baseCss as ThemedCssFunction<typeof theme>;
