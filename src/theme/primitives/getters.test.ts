import { always, identity, prop } from "ramda";
import { getP, getWithDirections } from "./getters";

describe("getP", () => {
  test("outputs empty string when the property isn't found", () => {
    const props = {};
    const tfn = undefined;
    const fn = undefined;
    const getter = prop("color");
    const property = "color";

    const expected = "";

    expect(getP(tfn)(fn)(getter)(property)(props)).toBe(expected);
  });

  test("works for properties with literal values", () => {
    const tfn = (key: string, val: string, fn: any, theme: any) =>
      `${key}: ${fn(theme)(val)};`;
    const props = { color: "red" };
    const fn = (theme: any) => identity;
    const getter = prop("color");
    const property = "color";

    const expected = "color: red;";

    expect(getP(tfn)(fn)(getter)(property)(props)).toBe(expected);
  });

  test("works with a custom function", () => {
    const tfn = (key: string, val: string, fn: any, theme: any) =>
      `${key}: ${fn(theme)(val)};`;
    const props = { color: "red" };
    const fn = (theme: any) => always("pink");
    const getter = prop("color");
    const property = "color";

    const expected = "color: pink;";

    expect(getP(tfn)(fn)(getter)(property)(props)).toBe(expected);
  });
  test("supports template functions", () => {
    const template = (property: string, val: number, fn: any, theme: any) =>
      `X { ${property}: ${fn(theme)(val)}; }`;
    const getter = prop("width");
    const fn = (theme: any) => identity;
    const property = "width";
    const props = { width: 1 };

    const expected = `X { width: 1; }`;

    expect(getP(template)(fn)(getter)(property)(props)).toBe(expected);
  });

  test("supports responsive template functions", () => {
    const theme = { devices: ["A", "B", "C"] };
    const props = { theme, width: [1, 2, 3] };
    const template = (property: string, vals: number[], fn: any, theme: any) =>
      vals
        .map(
          (x, i) =>
            `${theme.devices[i]} { ${property}: ${fn(theme)(vals[i])}; }`
        )
        .join("\n");
    const fn = (theme: any) => identity;
    const getter = prop("width");
    const property = "width";

    const expected = `A { width: 1; }\nB { width: 2; }\nC { width: 3; }`;

    expect(getP(template)(fn)(getter)(property)(props)).toBe(expected);
  });
});

describe("getWithDirections", () => {
  test("outputs a set of properties with directions", () => {
    const props = { pl: 1, px: 2 };
    const tfn = (k: number, v: number, fn: any, theme: any) =>
      `${k}: ${fn(theme)(v)};`;
    const fn = (theme: any) => identity;
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
});
