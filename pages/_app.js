import { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "components/layoutApp";

import { pageview } from "lib/gtag";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const handleRouteChange = (url) => {
    if (process.env.NODE_ENV === 'production') {
      pageview(url);
    } else {
      // console.log(`[GTAG- pageview] - ${url}`)
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />

      <style global jsx>{`
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
          box-sizing:border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
        display: block;
        }
        body {
          line-height: 1;
        }
        ol, ul {
          list-style: none;
        }
        blockquote, q {
          quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
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
        h1, h2, h3, h4, h5, h6, p {
          margin: 10px 0;
        }

        .icon svg{
          width: 30px;
          height: 30px;
          transition: all .2s ease-in-out; 
        }
        .icon:hover svg{
          fill: var(--primary);
          animation: bounceY 0.3s;
          animation-direction: alternate;
          animation-iteration-count: 2;
        }
        .center {
          display: flex;
          margin: 0;
          align-items: center;
        }
        a, a:visited {
          color: var(--black);
          text-decoration: none;
          transition: all .2s ease-in-out; 
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
          line-height: 2.2rem;
        }

        strong{
          font-weight: 700;
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

        [data-tooltip] {
          position: relative;
        }
        [data-tooltip]:before {            
          align-items: center;
          background: var(--white);
          border: 1px solid var(--black);
          border-radius: 5px;
          bottom: 0;
          color: var(--black);
          content: attr(data-tooltip);
          display: flex;
          height: 0;
          left: 0;
          opacity: 0;
          padding: .3rem;
          position: absolute;
          trasition: all .5s ease-in;
          width: 0;
        }
        [data-tooltip]:hover:before {        
          opacity : 1;
          min-width: 5rem;
          min-height: 4.2rem;
          bottom: -6rem;
          left: -0.5rem;
        }

      `}</style>

    </Layout>
  )
};

export default App;
