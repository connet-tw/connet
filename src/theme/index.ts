import baseStyled, { css as baseCss, ThemedCssFunction, ThemedStyledInterface } from "styled-components";
import { defaultTheme, Scale } from "./defaultTheme";
import { pathOr, mergeDeepRight } from "ramda";

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

const color = (theme: any) => (s: string) => pathOr(s, s.split("."), theme.colors);

const fns = {
  color,
  border,
  radius,
  dimension,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  space,
  shadow,
  zIndex,
};

const makeTheme = (theme: any) => mergeDeepRight(defaultTheme, theme);

export {
  fns,
  defaultTheme as theme,
  Scale,
  makeTheme
};

export const styled = baseStyled as ThemedStyledInterface<typeof defaultTheme>;
export const css = baseCss as ThemedCssFunction<typeof defaultTheme>;
