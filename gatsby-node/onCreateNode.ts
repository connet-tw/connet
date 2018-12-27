import { replacePath } from "./helpers";
import { GatsbyOnCreateNode } from "./types";

const { createFilePath } = require("gatsby-source-filesystem");

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  const assetPaths = ["frontmatter", "image"];
  node = replacePath(node)(assetPaths);

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "src/data" });
    const instanceName = getNode(node.parent).sourceInstanceName;
    createNodeField({ node, name: "type", value: instanceName });

    if (["services"].indexOf(instanceName) > -1) {
      createNodeField({ node, name: "slug", value: `/${instanceName}${slug}` });
    }
  }
};
