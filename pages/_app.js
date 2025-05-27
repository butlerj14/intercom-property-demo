import '../styles/globals.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="intercom"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.intercomSettings = { app_id: "t0dl0ok5" };
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/sbkmi1lj';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
