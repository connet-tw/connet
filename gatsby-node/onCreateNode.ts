import path from "path";
import { GatsbyOnCreateNode } from "./types";

const { createFilePath } = require("gatsby-source-filesystem");

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  const { frontmatter } = node;
  if (frontmatter) {
    const { image } = frontmatter;
    if (image) {
      if (image.indexOf("/assets") === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(path.resolve(__dirname, ".."), "/static/", image)
        );
      }
    }
  }

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "src/data" });
    const instanceName = getNode(node.parent).sourceInstanceName;
    createNodeField({ node, name: "type", value: instanceName });

    if (["services"].indexOf(instanceName) > -1) {
      createNodeField({ node, name: "slug", value: `/${instanceName}${slug}` });
    }
  }
};
