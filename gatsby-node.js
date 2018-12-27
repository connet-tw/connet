"use strict";

require("source-map-support").install();
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});

const { onCreatePage, createPages } = require("./gatsby-node/index.ts");

exports.createPages = createPages;
exports.onCreatePage = onCreatePage;

const path = require("path");
const languages = require("./src/i18n/locales/languages.js");

const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  const { frontmatter } = node;
  if (frontmatter) {
    const { image } = frontmatter;
    if (image) {
      if (image.indexOf("/assets") === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, "/static/", image)
        );
      }
    }
  }

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "src/data" });
    const type = getNode(node.parent).sourceInstanceName;

    createNodeField({ node, name: "slug", value: `/${type}${slug}` });
    createNodeField({ node, name: "type", value: type });
  }
};
