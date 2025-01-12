import NavBar from "@/components/NavBar";
import SocialMedia from "@/components/socialMedia";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [navBg,setNavBg] = useState("bg-gradient-to-r  from-black to-transparent");
  return (
    <div className="relative">
      <SocialMedia />
      <NavBar navBg={navBg}/>
      <Component {...pageProps} setNavBg={setNavBg} />
    </div>
  );
}
