import React from 'react';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  author?: string;
  description?: string;
  image?: string;
}

export const SEO = (props: SEOProps) => {
  const data = useStaticQuery<GatsbyTypes.MetaQuery>(graphql`
    query Meta {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author
        }
      }
    }
  `);

  const siteMeta = data.site?.siteMetadata;
  const title = props.title ?? siteMeta?.title ?? 'hakke.ro';
  const canonicalUrl = siteMeta?.siteUrl ?? 'https://hakke.ro';

  console.log(canonicalUrl);

  const url = `${canonicalUrl}/${useLocation().pathname}`;
  const image = `${canonicalUrl}/${props.image ?? 'icon.png'}`;

  // Optional
  const author = props.author ?? siteMeta?.author;
  const description = props.description ?? siteMeta?.description;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      {author && <meta name="author" content={author} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
    </Helmet>
  );
};
