import { useLanguage } from "@/context/LanguageContext";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   const { language } = useLanguage();

  return (
    <Html lang={language === "english" ? "en" : "ar"}>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body className="antialiased" style={{ direction: language === "arabic" ? "rtl" : "ltr" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
