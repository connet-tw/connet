import path from "path";
import { forEachObjIndexed, mapObjIndexed, test } from "ramda";

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

export const replacePath = (node: any, parentPath: string) => {
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
    replacePath(node, parentPath)
  );
};
