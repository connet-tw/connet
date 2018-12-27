import path from "path";
import { pathSatisfies, path as p, assocPath, test } from "ramda";
import { GatsbyOnCreateNode } from "./types";

const { createFilePath } = require("gatsby-source-filesystem");

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  const imagePath = ["frontmatter", "image"];

  if (pathSatisfies(test(/^\/assets/), imagePath, node)) {
    node = assocPath(
      imagePath,
      path.relative(
        path.dirname(node.fileAbsolutePath),
        path.join(path.resolve(__dirname, ".."), "/static/", p(
          imagePath,
          node
        ) as string)
      ),
      node
    );
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
