import "../styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.Intercom && url.includes("/property/")) {
        const slug = url.split("/property/")[1];
        window.Intercom("update", {
          url_debug_test: `${window.location.origin}/api/property/${slug}`,
        });
      }
    };

    // Run on initial page load
    if (typeof window !== "undefined" && window.location.pathname.includes("/property/")) {
      const slug = window.location.pathname.split("/property/")[1];
      window.Intercom("update", {
        url_debug_test: `${window.location.origin}/api/property/${slug}`,
      });
    }

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        id="intercom"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.intercomSettings = {
              app_id: "t0dl0ok5",
              user_id: "user_123456"
            };

            (function(){
              var w = window;
              var ic = w.Intercom;
              if (typeof ic === "function") {
                ic('shutdown');
                ic('boot', w.intercomSettings);
              } else {
                var d = document;
                var i = function() { i.c(arguments); };
                i.q = [];
                i.c = function(args) { i.q.push(args); };
                w.Intercom = i;
                var l = function() {
                  var s = d.createElement('script');
                  s.type = 'text/javascript';
                  s.async = true;
                  s.src = 'https://widget.intercom.io/widget/t0dl0ok5';
                  var x = d.getElementsByTagName('script')[0];
                  x.parentNode.insertBefore(s, x);
                };
                if (document.readyState === 'complete') {
                  l();
                } else if (w.attachEvent) {
                  w.attachEvent('onload', l);
                } else {
                  w.addEventListener('load', l, false);
                }
              }
            })();
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
