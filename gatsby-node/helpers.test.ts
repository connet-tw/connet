import { replacePath, transformAssetPaths } from "./helpers";
import { always } from "ramda";

describe("transformAssetPaths", () => {
  test("picks properties with assets only", () => {
    const node = { name: "name", image: "/assets/a.png" };

    const result = { name: "name", image: "asset" };
    const fn = always("asset");

    expect(transformAssetPaths(fn, node)).toEqual(result);
  });

  test("picks properties from arrays", () => {
    const node = { name: "name", key: [{ image: "/assets/a.png" }] };

    const result = { name: "name", key: [{ image: "asset" }] };
    const fn = always("asset");

    expect(transformAssetPaths(fn, node)).toEqual(result);
  });
});

describe("replacePath", () => {
  test("replaces paths", () => {
    const node = { name: "name", image: "/assets/a.png" };

    const result = { name: "name", image: "static/assets/a.png" };
    expect(replacePath(node, __dirname)).toEqual(result);
  });
});
