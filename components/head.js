import React from 'react';
import Head from 'next/head';

const defaultDescription = 'Web developer';
const defaultOGURL = 'https://me.joca.dev';
const defaultOGImage = 'https://avatars2.githubusercontent.com/u/3631074?s=460&v=4';
const defaultTitle = 'Desarrollador web en constante renovación';

const Header = ({ title, description, url, ogImage, children }) => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="twitter:site" content={url || '@gantit'} />
    <meta name="twitter:creator" content="@gantit" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta name="twitter:domain" content="joca.dev" />
    <meta property="og:locale" content="es-ES" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={`Web personal - ${title || defaultTitle}`} />
    <meta property="og:description" content={description || defaultDescription} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    {children}
  </Head>
);

export default Header;
