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
      if (image.indexOf("/img") === 0) {
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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              type
              slug
            }
            frontmatter {
              lang
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges
      .filter(({ node }) => node.fields.type === "services")
      .forEach(({ node }) => {
        createPage({
          path: `/${node.frontmatter.lang}${node.fields.slug}`,
          component: path.resolve(
            `src/templates/${matchTemplate(node.fields.type)}`
          ),
          context: {
            languages,
            locale: node.frontmatter.lang,
            slug: node.fields.slug,
          },
        });
      });
  });
};

function matchTemplate(s) {
  switch (s) {
    case "services":
      return "serviceTemplate.tsx";
    default:
      throw `unknown node type: ${s}`;
  }
}
