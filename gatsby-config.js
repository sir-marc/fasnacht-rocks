require("dotenv").config({
  path: `.env`,
})
const graphqlToken = process.env.CRAFTQL_API_KEY;
const apiUrl = process.env.GATSBY_BACKEND_URL + '/api';

console.log(apiUrl)

module.exports = {
  siteMetadata: {
    title: `Gatsby Craft Barebones`,
    description: `Kick off your next, great Gatsby & Craft CMS project with this starter.`,
    author: `@v3frankie`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2E76A4`,
        theme_color: `#2E76A4`,
        display: `minimal-ui`,
        icon: `src/images/party-emoji.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        fieldName: `craft`,
        typeName: `Craft`,
        url: apiUrl,
        headers: {
          Authorization: `bearer ${graphqlToken}`,
        },
      },
    },
    'craftql-images',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
