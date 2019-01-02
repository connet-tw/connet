import { contains } from "ramda";
//import { createFields } from "./helpers";
import { GatsbyOnCreateNode } from "./types";

const { createFilePath } = require("gatsby-source-filesystem");

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  //if (/(yaml|remark)$/.test(node.internal.owner)) {
  //createFields(node, getNode, createNodeField);
  //}

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
