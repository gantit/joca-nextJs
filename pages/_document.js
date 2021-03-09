import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="robots" content="follow, index" />
          <link href="/img/icons/favicon.ico" rel="shortcut icon" />
          <link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/img/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/img/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/img/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="var(--white);" />
          <meta name="msapplication-TileImage" content="/img/icons/ms-icon-144x144.png" />
          <meta name="theme-color" content="var(--white);" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
          :root {
            --primary: #ff9800;
            --secondary: #01a283;
            --black: #484848;
            --white: #ffffff;
          }
          html {
            font-size: 62.5%;
            font-size-adjust: 100%;
          }
          body {
            margin: 0;
            font-family: 'Source Code Pro', -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }

          .icon svg{
            width: 30px;
            height: 30px;
            transition: all .2s ease-in-out; 
          }
          .icon:hover svg{
            fill: var(--primary);
            animation: bounceY 0.2s;
            animation-direction: alternate;
            animation-iteration-count: 5;
          }
          .center {
            display: flex;
            margin: 0;
            align-items: center;
          }
          a, a:visited {
            color: var(--black);
            text-decoration: none;
          }
          svg {
            fill: var(--black);
          }

          h1 {
            font-size: 2.6rem;
          }
          h2 {
            font-size: 2.2rem;
          }
          h3 {
            font-size: 1.8rem;
          }
          p, span {
            font-size: 1.6rem;
          }
          @keyframes bounceX { 
            0% { transform: translateX(0); }
            50% { transform: translateX(-2px); }
            100% { transform: translateX(0); }
          }

          @keyframes bounceY { 
            0% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
            100% { transform: translateY(0); }
          }

          :not(pre) > code[class*="language-"], pre[class*="language-"] {
            border-radius: 10px;
            margin: 2em 0;
          }
          code {
            background: #2d2d2d;
            color: #ccc;
            padding: 3px;
            border-radius: 3px
          }
          code, pre, code[class*="language-"], pre[class*="language-"] {
            font-size: 1.6rem;
          }
        `}</style>

      </Html>
    )
  }
}

export default MyDocument
