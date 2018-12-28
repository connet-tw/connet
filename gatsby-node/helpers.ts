import path from "path";
import {
  pickBy,
  always,
  ifElse,
  compose,
  path as p,
  assocPath,
  test,
} from "ramda";

export const replacePath = (node: any, getNode: any, assetPath: string[]) =>
  compose(
    ifElse(
      test(/^\/assets/),
      x => setPath(node, getNode(node.parent), assetPath, x),
      always(node)
    ),
    p(assetPath)
  )(node);

const setPath = (
  node: any,
  parent: any,
  assetPath: string[],
  originalPath: string
) => {
  const newPath = path.relative(
    path.dirname(parent.absolutePath),
    path.join(path.resolve(__dirname, ".."), "/static/", originalPath)
  );
  return assocPath(assetPath, newPath, node);
};

export const transformAssetPaths = (content: any) => {
  const extensions = new Set([".png"]);
  return pickBy((v, k) => {
    if (typeof v === "string") {
      const ext = path.extname(v);
      return extensions.has(ext);
    }
    return false;
  }, content);
};
