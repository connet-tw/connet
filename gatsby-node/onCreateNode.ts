import { contains } from "ramda";
import { replaceAssetPath, replaceAssetPaths } from "./helpers";
import { GatsbyOnCreateNode } from "./types";
import MarkdownIt from "markdown-it";

const { createFilePath } = require("gatsby-source-filesystem");

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.owner === "gatsby-transformer-remark") {
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

  if (node.internal.type === "ContentYaml") {
    const md = new MarkdownIt();
    const slug = `/${node.name}`;
    const parentPath = getNode(node.parent).absolutePath;
    const image = replaceAssetPath(parentPath)(node.image, "");
    const markdown = md.render(node.markdown);

    createNodeField({ node, name: "markdown", value: markdown });
    createNodeField({ node, name: "image", value: image });
    createNodeField({ node, name: "slug", value: slug });
    createNodeField({
      node,
      name: "template",
      value: `/${node.template || node.name}Template.tsx`,
    });
  }
};
