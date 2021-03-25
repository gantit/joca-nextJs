import Head from 'next/head'

const defaultDescription = 'Desarrollador web en constante renovación'
const defaultOGURL = 'https://me.joca.dev'
const defaultOGImage = 'https://me.joca.dev/img/avatar.png'
const defaultTitle = 'Johnny C. - Web developer'

const Header = ({ title, description, url, ogImage, children }) => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{title || defaultTitle}</title>
    <link rel="canonical" href={url} />
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="twitter:site" content={url || '@gantit'} />
    <meta name="twitter:creator" content="@gantit" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta name="twitter:domain" content="joca.dev" />
    <meta property="og:locale" content="es-ES" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta
      property="og:title"
      content={`Web personal - ${title || defaultTitle}`}
    />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    {children}
  </Head>
)

export default Header
