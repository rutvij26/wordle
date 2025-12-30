import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Wordle - Play the Classic Word Guessing Game"
        />
        <meta
          name="description"
          content="Play Wordle, the popular word guessing game. Guess the 5-letter word in 6 tries. Challenge yourself daily with this addictive puzzle game!"
        />
        <meta
          name="keywords"
          content="wordle, word game, puzzle, guessing game, word puzzle, daily wordle, word guessing"
        />
        <meta name="author" content="Rutvij Sathe" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wordle.rutvijsathe.dev/" />
        <meta
          property="og:title"
          content="Wordle - Play the Classic Word Guessing Game"
        />
        <meta
          property="og:description"
          content="Play Wordle, the popular word guessing game. Guess the 5-letter word in 6 tries. Challenge yourself daily with this addictive puzzle game!"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="Wordle" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wordle.rutvijsathe.dev/" />
        <meta
          name="twitter:title"
          content="Wordle - Play the Classic Word Guessing Game"
        />
        <meta
          name="twitter:description"
          content="Play Wordle, the popular word guessing game. Guess the 5-letter word in 6 tries. Challenge yourself daily with this addictive puzzle game!"
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
