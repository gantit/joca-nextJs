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
    </>
  )
};

export default App;
