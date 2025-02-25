import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import SocialMedia from "@/components/socialMedia";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Footer from "@/components/footer";
import LanguageProvider, { useLanguage } from "../context/LanguageContext";
import SplashScreen from "../components/splashScreen";
import { Cairo } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Import Next.js Script

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const cairoFont = Cairo({ variable: "--font-cairo", subsets: ["arabic"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const { language } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <LanguageProvider>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JD7TJTST0M"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DJ4WVZ92N2"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-JD7TJTST0M', {
                page_path: window.location.pathname,
              });

              gtag('config', 'G-DJ4WVZ92N2', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Preload the entire App but keep it hidden under the Splash Screen */}
        <div
          className={`${
            language === "arabic" ? cairoFont.variable : geistSans.variable
          } ${geistMono.variable} relative pb-[18vh] min-h-[90vh]`}
          style={{ visibility: showSplash ? "hidden" : "visible" }}
        >
          <SocialMedia />
          <NavBar navBg={"bg-black"} />
          <Component {...pageProps} />
          <Footer />
        </div>

        {/* Show Splash Screen while App is preloading */}
        {showSplash && <SplashScreen />}
      </LanguageProvider>
    </Provider>
  );
}
