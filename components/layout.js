import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gantit" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        <link rel="preload" href="https://unpkg.com/prismjs@1.23.0/themes/prism-tomorrow.css" rel="stylesheet" />
      </Head>
      <Link href='/blog'><a>volver</a></Link>
      <article
        dangerouslySetInnerHTML={{ __html: children }}
      />
      <style jsx global>{`
        article {
          max-width: 800px;
          margin: 1em auto;
        }
        :not(pre) > code[class*="language-"], pre[class*="language-"] {
          border-radius: 10px;
          margin: 2em 0;
        }
      `}</style>
    </>
  );
}


export default Layout