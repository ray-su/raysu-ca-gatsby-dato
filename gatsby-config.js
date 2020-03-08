require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Ray Su`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `19d2a4f8c6538f80bdd400bf24883a`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
