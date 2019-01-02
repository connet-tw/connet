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
  if (node.internal.type === "Markdown") {
    const slug = createFilePath({ node, getNode, basePath: "src/data" });
    const directory = getNode(node.parent).relativeDirectory;
    createNodeField({ node, name: "type", value: directory });

    if (contains(directory, ["services"])) {
      createNodeField({ node, name: "slug", value: `/${directory}${slug}` });
      createNodeField({
        node,
        name: "template",
        value: node.frontmatter.template || `/${directory}Template.tsx`,
      });
    }
  }
};
