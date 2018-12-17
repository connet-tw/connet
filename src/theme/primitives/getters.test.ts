import { always, identity, prop } from "ramda";
import { getP, getProperty, getWithDirections } from "./getters";

test("getProperty works for properties with literal values", () => {
  const props = { color: "red" };
  const fn = (theme: any) => identity;
  const getter = prop("color");
  const property = "color";

  const expected = "color: red;";

  expect(getProperty(fn)(getter)(property)(props)).toBe(expected);
});

test("getProperty works for with a custom function", () => {
  const props = { color: "red" };
  const fn = (theme: any) => always("pink");
  const getter = prop("color");
  const property = "color";

  const expected = "color: pink;";

  expect(getProperty(fn)(getter)(property)(props)).toBe(expected);
});

test("getP supports template functions", () => {
  const template = (property: string, val: number, fn: any) =>
    `X { ${property}: ${fn(val)}; }`;
  const fn = (theme: any) => (x: any) => `${x * 100}%`;
  const getter = prop("width");
  const property = "width";
  const props = { width: [1 / 2] };

  const expected = `X { width: 50%; }`;

  expect(getP(template)(fn)(getter)(property)(props)).toBe(expected);
});

test("getP supports responsive template functions", () => {
  const theme = { devices: ["A", "B", "C"] };
  const props = { theme, width: [1, 2, 3] };
  const template = (property: string, vals: number[], fn: any, theme: any) =>
    vals
      .map((x, i) => `${theme.devices[i]} { ${property}: ${fn(vals[i])}; }`)
      .join("\n");
  const fn = (theme: any) => identity;
  const getter = prop("width");
  const property = "width";

  const expected = `A { width: 1; }\nB { width: 2; }\nC { width: 3; }`;

  expect(getP(template)(fn)(getter)(property)(props)).toBe(expected);
});

test("getWithDirections outputs a set of properties with directions", () => {
  const props = { pl: 1, px: 2 };
  const tfn = (k: number, v: number, fn: any, theme: any) => `${k}: ${v};`;
  const fn = identity;
  const property = "padding";
  const dps = [
    { dir: "left", l: ["l", "x", ""] },
    { dir: "right", l: ["r", "x", ""] },
    { dir: "top", l: ["t", "y", ""] },
    { dir: "bottom", l: ["b", "y", ""] },
  ];

  const expected = "padding-left: 1;\npadding-right: 2;";

  expect(getWithDirections(dps)(tfn)(fn)(property)(props)).toBe(expected);
});
