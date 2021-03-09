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
          <link defer rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            defer
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
