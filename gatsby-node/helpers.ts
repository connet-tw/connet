import path from "path";
import { always, ifElse, compose, path as p, assocPath, test } from "ramda";

export const replacePath = (node: any) => (ap: string[]) =>
  compose(
    ifElse(
      test(/^\/assets/),
      x =>
        assocPath(
          ap,
          path.relative(
            path.dirname(node.fileAbsolutePath),
            path.join(path.resolve(__dirname, ".."), "/static/", x)
          ),
          node
        ),
      always(node)
    ),
    p(ap)
  )(node);
