import chroma from "chroma-js";

export const darken = (color: string) => (v: number) => chroma(color).darken(v).hex();
export const lighten = (color: string) => (v: number) => chroma(color).brighten(v).hex();

const pxToRem = (n: number, base: number = 16) => n/base;

export const unit = (u: string, xs: number[]) => xs.map(x => `${x}${u}`);

// generate media queries such as (min-width: 480rem)
const media = (sizes: {[key: string]: number}) =>
  Object.keys(sizes).reduce((acc, curr) => {
    acc[curr] = `min-width: ${pxToRem(sizes[curr])}rem`;
    return acc;
},{});

export {
  pxToRem,
  media,
};
