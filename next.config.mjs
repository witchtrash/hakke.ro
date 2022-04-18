import remarkFrontmatter from 'remark-frontmatter';
import remarkUnwrapImages from 'remark-unwrap-images';

/** @type {import('next').NextConfig}*/
export default {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter, remarkUnwrapImages],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};
