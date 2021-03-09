import { useEffect } from "react";
import { useRouter } from "next/router";
import Nav from 'components/nav';

import { pageview } from "lib/gtag";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const handleRouteChange = (url) => {
    if (process.env.NODE_ENV === 'production') {
      pageview(url);
    } else {
      console.log(`[GTAG- pageview] - ${url}`)
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Nav />
      <Component {...pageProps} />

      <style global jsx>{`
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

    </>
  )
};

export default App;
