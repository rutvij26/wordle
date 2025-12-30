import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Wordle - Play the Classic Word Guessing Game</title>
        <meta
          name="description"
          content="Play Wordle, the popular word guessing game. Guess the 5-letter word in 6 tries. Challenge yourself daily with this addictive puzzle game!"
        />
        <link rel="canonical" href="https://wordle.rutvijsathe.dev" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Wordle",
              description:
                "Play Wordle, the popular word guessing game. Guess the 5-letter word in 6 tries.",
              url: "https://wordle.rutvijsathe.dev",
              applicationCategory: "Game",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "Rutvij Sathe",
                url: "https://rutvijsathe.dev",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1000",
              },
            }),
          }}
        />
      </Head>

      {/* AdSense - Load with proper strategy */}
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2203570267369097"
        crossOrigin="anonymous"
      />

      {/* Google Analytics - Optimized loading */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-9XV58CQXLV"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9XV58CQXLV');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
