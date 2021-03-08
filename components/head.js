import React from 'react';
import Head from 'next/head';

const defaultDescription = 'Web developer';
const defaultOGURL = 'https://me.joca.dev';
const defaultOGImage = 'https://avatars2.githubusercontent.com/u/3631074?s=460&v=4';
const defaultTitle = 'Desarrollador web en constante renovación';

const Header = props => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={`Web personal - ${props.title || defaultTitle}`} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || 'https://twitter.com/Gantit'} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
);

export default Header;
