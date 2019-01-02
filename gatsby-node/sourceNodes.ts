import MarkdownIt from "markdown-it";
import { GatsbySourceNodes } from "./types";
import { processStringProperties, replaceAssetPath } from "./helpers";

const md = new MarkdownIt();

export const sourceNodes: GatsbySourceNodes = ({
  actions,
  getNodes,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  getNodes()
    .filter(n => n.internal.type === "ContentYaml")
    .forEach(n => {
      const { id, parent, children, internal, ...content } = Object.assign(
        {},
        n
      );

      const fn = (v: string, k: string) => {
        return k === "markdown" ? md.render(v) : v;
      };

      const c = processStringProperties(
        [fn, replaceAssetPath(getNode(parent).absolutePath)],
        content
      );

      const nodeMeta = {
        id: createNodeId(`${n.id}-content`),
        parent,
        children: [],
        internal: {
          type: `Content`,
          content: JSON.stringify(c),
          contentDigest: createContentDigest(c),
        },
      };
      const node = Object.assign({ originalId: n.id }, c, nodeMeta);
      createNode(node);
    });
};
