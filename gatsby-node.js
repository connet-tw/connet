"use strict";

require("source-map-support").install();
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});

const { createPages } = require("./config/createPages");
exports.createPages = createPages;

const path = require("path");
const languages = require("./src/i18n/locales/languages.js");

const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.includes("404")) {
    return Promise.resolve();
  }

  return new Promise(resolve => {
    const redirect = path.resolve("src/i18n/redirect.tsx");
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: "",
        routed: false,
        redirectPage: page.path,
      },
    };
    deletePage(page);
    createPage(redirectPage);

    languages.forEach(({ code }) => {
      const localePage = {
        ...page,
        originalPath: page.path,
        path: `/${code}${page.path}`,
        context: {
          languages,
          locale: code,
          routed: true,
          originalPath: page.path,
        },
      };
      createPage(localePage);
    });

    resolve();
  });
};

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
