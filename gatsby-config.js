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
          blog_post: require('./src/schemas/blog_post.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: './src/schemas/query-types.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'hakke.ro',
        short_name: 'hakke.ro',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffdda2',
        icon: 'static/icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
