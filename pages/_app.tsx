import NavBar from "@/components/NavBar";
import SocialMedia from "@/components/socialMedia";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Footer from "@/components/footer";
import LanguageProvider, { useLanguage } from "../context/LanguageContext";
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
  const {language} = useLanguage();
  return (
    <Provider store={store}>
      <LanguageProvider>
        <div  className={`${
        language === "arabic" ? cairoFont.variable : geistSans.variable
      } ${geistMono.variable}relative`}>
          <SocialMedia />
          <NavBar navBg={"bg-black"} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </LanguageProvider>
    </Provider>
  );
}
