module.exports = {
  siteMetadata: {
    title: `Gatsby Source - Behance`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-behance',
      options: {
        username: 'lekoarts',
        apiKey: `${process.env.API_KEY}`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
