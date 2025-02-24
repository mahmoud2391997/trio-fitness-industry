import { useLanguage } from "@/context/LanguageContext";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   const { language } = useLanguage();

  return (
    <Html lang={language === "english" ? "en" : "ar"}>
   <Head>
  <meta charSet="UTF-8" />
  <title>Trio Fitness Industry - Personalized Training with Hassan Mohamed</title>
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta name="description" content="Join Trio Fitness Industry for a personalized training experience with certified coach Hassan Mohamed. Achieve your fitness goals with customized workout plans." />
  <meta name="keywords" content="fitness, personal training, workout plans, weight loss, muscle gain, Hassan Mohamed, online coaching, gym, strength training, personal trainer, home workouts" />
  <meta name="author" content="Trio Fitness Industry" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />

  <meta property="og:title" content="Trio Fitness Industry - Personalized Training with Hassan Mohamed" />
  <meta property="og:description" content="Achieve your fitness goals with expert guidance from certified coach Hassan Mohamed. Personalized workout plans tailored to your needs." />
  <meta property="og:image" content="/image.png" />
  <meta property="og:url" content="https://tiofitnessindustry.vercel.app" />
  <meta property="og:type" content="website" />
  


  <meta name="geo.region" content="EG" />
  <meta name="geo.placename" content="Cairo, Egypt" />
  <meta name="geo.position" content="30.0444;31.2357" />
  <meta name="ICBM" content="30.0444, 31.2357" />

  <link rel="icon" href="/image.png" />
</Head>


      <body className="antialiased" style={{ direction: language === "arabic" ? "rtl" : "ltr" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
