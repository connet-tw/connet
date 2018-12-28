import { transformAssetPaths } from "./helpers";

describe("transformAssetPaths", () => {
  test("picks properties with assets only", () => {
    const node = { name: "name", image: "a.png" };

    const result = { image: "a.png" };

    expect(transformAssetPaths(node)).toEqual(result);
  });

  test("picks properties in arrays", () => {
    const node = { name: "name", val: [{ image: "a.png" }] };

    const result = { val: [{ image: "a.png" }] };

    expect(transformAssetPaths(node)).toEqual(result);
  });
});
