import path from "path";
import {
  mergeWith,
  isNil,
  isEmpty,
  either,
  forEachObjIndexed,
  mapObjIndexed,
  test,
  defaultTo,
} from "ramda";

export const transformAssetPaths = (fn: any, content: any): any => {
  if (Array.isArray(content)) {
    return content.map(x => transformAssetPaths(fn, x));
  }
  return mapObjIndexed((v, k) => {
    if (typeof v !== "string") return transformAssetPaths(fn, v);
    if (typeof v === "string" && test(/^\/assets/, v)) return fn(v);
    else return v;
  }, content);
};

export const replaceAssetPaths = (node: any, parentPath: string) => {
  const setPath = (v: string) => {
    return path.relative(
      path.dirname(parentPath),
      path.join(path.resolve(__dirname, ".."), "/static/", v)
    );
  };
  return transformAssetPaths(setPath, node);
};

export const createFields = (node: any, getNode: any, fn: any) => {
  const parentPath = getNode(node.parent).absolutePath;
  forEachObjIndexed(
    (v, k) => fn({ node, name: k, value: v }),
    replaceAssetPaths(node, parentPath)
  );
};

export const mergeTranslation = (a: any, b: any) =>
  mergeWith((a, b) => (either(isNil, isEmpty)(b) ? a : b))(a, defaultTo({}, b));
