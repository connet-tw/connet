import { GatsbySourceNodes } from "./types";

export const sourceNodes: GatsbySourceNodes = ({
  actions,
  getNodes,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  getNodes()
    .filter(n => n.internal.type === "MarkdownRemark")
    .forEach(n => {
      const { id, parent, children, internal, ...content } = Object.assign(
        {},
        n
      );

      const nodeMeta = {
        id: createNodeId(`${n.id}-markdown`),
        parent: n.parent,
        children: [],
        internal: {
          type: `Markdown`,
          content: JSON.stringify(content),
          contentDigest: createContentDigest(content),
        },
      };
      const node = Object.assign({ originalId: n.id }, content, nodeMeta);
      createNode(node);
    });
};
