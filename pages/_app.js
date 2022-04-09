/* eslint-disable react/prop-types */
import "../styles/globals.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "../common/Loading";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="bg-OurBlack h-screen">
      <Head>
        <title>Respct.Club</title>
        <meta
          name="description"
          content="Respct.club is a creator token platform where you become a shareholder in the journey of your favorite creator"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="canonical" href="https://respct.club/" />
        <meta name="keywords" content="Respct, club, web3, tokens" />
        <meta name="author" content="Respct" />

        {/* Social: Twitter */}
        <meta name="twitter:card" content="/favicon.ico" />
        <meta name="twitter:site" content="https://respct.club/" />
        <meta name="twitter:title" content="Respct" />
        <meta
          name="twitter:description"
          content="Respct.club is a creator token platform where you become a shareholder in the journey of your favorite creator"
        />
        <meta name="twitter:image:src" content="/logo.png" />
        <meta name="twitter:image:alt" content="Respct Logo" />

        {/* Social: Facebook / Open Graph */}
        <meta property="og:url" content="https://respct.club/" />
        <meta property="og:type" content="Creator Economy" />
        <meta property="og:title" content="Respct" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          property="og:description"
          content="Respct.club is a creator token platform where you become a shareholder in the journey of your favorite creator"
        />
        <meta property="og:site_name" content="Respct" />

        {/* Social: Google+ / Schema.org */}
        <meta itemProp="name" content="Respct" />
        <meta
          itemProp="description"
          content="Respct.club is a creator token platform where you become a shareholder in the journey of your favorite creator"
        />
        <meta itemProp="image" content="/icon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RCLP5CMS40"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[G-RCLP5CMS40]', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </div>
  );
}
export default MyApp;
