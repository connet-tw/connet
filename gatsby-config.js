const siteMetadata = require("./siteMetadata");

module.exports = {
  siteMetadata,
  //pathPrefix: "connet",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/images/logos/logo-square.jpg",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "controlnet-international",
        short_name: "ctn",
        start_url: "/",
        background_color: "#336699",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/images/logos/logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img/`,
        name: "img",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/services/`,
        name: "services",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/references/`,
        name: "references",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    "gatsby-transformer-sharp",
    "gatsby-transformer-javascript-frontmatter",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
};
