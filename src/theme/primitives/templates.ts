import { Theme } from "../defaultTheme";

type Fn<T> = (theme: Theme) => (val: T) => string | number;

export const template = <T>(key: string, val: T, fn: Fn<T>, theme: Theme) =>
  `${key}: ${fn(theme)(val)};`;

export const responsiveTemplate = <T>(
  key: string,
  val: T | T[],
  fn: Fn<T>,
  theme: Theme
) => {
  if (Array.isArray(val)) {
    return val
      .map((v, i) => `${theme.devices[i]} { ${key}: ${fn(theme)(v)}; }`)
      .join("\n");
  } else {
    return `${key}: ${fn(theme)(val)};`;
  }
};
