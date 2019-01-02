import { contains } from "ramda";
import { replaceAssetPaths } from "./helpers";
import { GatsbyOnCreateNode } from "./types";

const { createFilePath } = require("gatsby-source-filesystem");

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.owner === "gatsby-transformer-remark") {
    console.log(node);

    node.frontmatter = replaceAssetPaths(
      node.frontmatter,
      node.fileAbsolutePath
    );
  }

  // prepare pages from markdown
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "src/data" });
    const instanceName = getNode(node.parent).sourceInstanceName;
    createNodeField({ node, name: "type", value: instanceName });

    if (contains(instanceName, ["services"])) {
      createNodeField({ node, name: "slug", value: `/${instanceName}${slug}` });
      createNodeField({
        node,
        name: "template",
        value: node.frontmatter.template || `/${instanceName}Template.tsx`,
      });
    }
  }
};
