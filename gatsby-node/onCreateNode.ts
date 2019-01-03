import { contains } from "ramda";
import {
  processStringProperties,
  replaceAssetPath,
  replaceAssetPaths,
} from "./helpers";
import { GatsbyOnCreateNode } from "./types";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

const { createFilePath } = require("gatsby-source-filesystem");

export const onCreateNode: GatsbyOnCreateNode = ({
  node,
  getNode,
  createNodeId,
  createContentDigest,
  actions,
}) => {
  const { createNode, createNodeField, createParentChildLink } = actions;

  if (node.internal.owner === "gatsby-transformer-remark") {
    node.frontmatter = replaceAssetPaths(
      node.frontmatter,
      node.fileAbsolutePath
    );
  }

  // Create Content nodes
  if (node.internal.type === "ContentYaml") {
    const { id, parent, children, internal, ...content } = Object.assign(
      {},
      node
    );

    const fn = (v: string, k: string) => {
      return k === "markdown" ? md.render(v) : v;
    };

    const c = processStringProperties(
      [fn, replaceAssetPath(getNode(parent).absolutePath)],
      content
    );

    const nodeMeta = {
      id: createNodeId(`${node.id}-content`),
      parent: node.id,
      children: [],
      internal: {
        type: `Content`,
        content: JSON.stringify(c),
        contentDigest: createContentDigest(c),
      },
    };
    const contentNode = Object.assign({ originalId: node.id }, c, nodeMeta);
    createNode(contentNode);
    createParentChildLink({ parent: node, child: contentNode });
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

  if (node.internal.type === "Content") {
    const slug = `/${node.name}`;

    createNodeField({ node, name: "slug", value: slug });
    createNodeField({
      node,
      name: "template",
      value: `/${node.template || node.name}Template.tsx`,
    });
  }
};
