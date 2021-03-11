import Head from 'next/head';

import Back from "components/back";

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
      <div className="post">
        <Back url="/blog" />
        <article
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
      <style jsx>{`
        .post {
          max-width: 1200px;
          margin: 1em auto;
        }
        @media (max-width: 810px) {
          .post {
            margin: 1rem;
          }
        }

        h1 {
          word-break: break-word;
        }
        article {
          max-width: 800px;
          margin: 1em auto;
        }

        :global(.icon_back) {
          position:sticky;
          top: 80px;
        }
      `}</style>
    </>
  );
}


export default Layout