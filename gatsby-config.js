require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'hakke.ro',
    siteUrl: 'https://hakke.ro',
    description: 'hakke.ro webzone',
    author: 'mari <mari@hakke.ro>',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY,
        accessToken: process.env.API_ACCESS_TOKEN,
        schemas: {
          poem: require('./src/schemas/poem.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: './src/schemas/query-types.d.ts',
      },
    },
  ],
};
