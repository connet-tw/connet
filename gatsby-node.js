const path = require('path');
const languages = require("./src/i18n/locales/languages.js");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.includes('404')) {
    return Promise.resolve();
  }

  return new Promise(resolve => {
    const redirect = path.resolve('src/i18n/redirect.tsx');
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: '',
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
      }
      createPage(localePage)
    })

    resolve()
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const parent = getNode(node.parent);
    const [name, lang] = parent.name.split(".");
    const type = parent.sourceInstanceName;
    const slug = [type, parent.relativeDirectory].join("/");

    createNodeField({node, name: "lang", value: lang});
    createNodeField({node, name: "type", value: type});
    createNodeField({node, name: "slug", value: "/" + slug});
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            fields {
              lang
              type
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges
      .filter(({node}) => languages.find(({code}) => code === node.fields.lang))
      .forEach(({ node }) => {
        createPage({
          path: `/${node.fields.lang}${node.fields.slug}`,
          component: path.resolve(`src/templates/${matchTemplate(node.fields.type)}`),
          context: {
            languages,
            locale: node.fields.lang,
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
      throw("unknown node type");
  }
}
