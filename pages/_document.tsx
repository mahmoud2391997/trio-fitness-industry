import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en"> {/* Default to English */}
      <Head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://triofitnessindustry.vercel.app" />

        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <title>Trio Fitness Industry - Personalized Training with Hassan Mohamed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Join Trio Fitness Industry for a personalized training experience with certified coach Hassan Mohamed. Achieve your fitness goals with customized workout plans." />
        <meta name="keywords" content="fitness, personal training, workout plans, weight loss, muscle gain, Hassan Mohamed, online coaching, gym, strength training, personal trainer, home workouts" />
        <meta name="author" content="Trio Fitness Industry" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Trio Fitness Industry - Personalized Training with Hassan Mohamed" />
        <meta property="og:description" content="Achieve your fitness goals with expert guidance from certified coach Hassan Mohamed. Personalized workout plans tailored to your needs." />
        <meta property="og:image" content="/image.png" />
        <meta property="og:url" content="https://triofitnessindustry.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Cairo, Egypt" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />

        {/* Favicon */}
        <link rel="icon" href="/image.png" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Trio Fitness Industry - Personalized Training with Hassan Mohamed",
              "description": "Join Trio Fitness Industry for a personalized training experience with certified coach Hassan Mohamed. Achieve your fitness goals with customized workout plans.",
              "url": "https://triofitnessindustry.vercel.app",
              "image": "https://triofitnessindustry.vercel.app/image.png",
              "author": {
                "@type": "Person",
                "name": "Hassan Mohamed"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Trio Fitness Industry"
              }
            }
          `}
        </script>
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}