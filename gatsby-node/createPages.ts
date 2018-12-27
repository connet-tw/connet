import path from "path";
import { GatsbyCreatePages } from "./types";
import languages from "../src/i18n/locales/languages";

export const createPages: GatsbyCreatePages = ({ actions, graphql }) => {
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
  `).then((result: any) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges
      .filter(({ node }: any) => node.fields.slug)
      .forEach(({ node }: any) => {
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

function matchTemplate(s: string) {
  switch (s) {
    case "services":
      return "serviceTemplate.tsx";
    default:
      throw `unknown node type: ${s}`;
  }
}
