import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import SocialMedia from "@/components/socialMedia";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Footer from "@/components/footer";
import LanguageProvider, { useLanguage } from "../context/LanguageContext";
import SplashScreen from "../components/splashScreen"; // Import SplashScreen
import { Cairo } from "next/font/google"; // Import Cairo font for Arabic
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const { language } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the splash screen after 3 seconds
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <LanguageProvider>
        {/* Preload the entire App but keep it hidden under the Splash Screen */}
        <div
          className={`${
            language === "arabic" ? cairoFont.variable : geistSans.variable
          } ${geistMono.variable} relative`}
          style={{ visibility: showSplash ? "hidden" : "visible" }} // Hide app content initially
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
