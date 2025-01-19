import NavBar from "@/components/NavBar";
import SocialMedia from "@/components/socialMedia";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <SocialMedia />
      <NavBar navBg={"bg-black"}/>
      <Component {...pageProps}  />
    </div>
  );
}
