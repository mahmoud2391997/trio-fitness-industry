import NavBar from "@/components/NavBar";
import SocialMedia from "@/components/socialMedia";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="relative">

      <SocialMedia />
      <NavBar navBg={"bg-black"}/>
      <Component {...pageProps}  />
      </div>
    </Provider>
  );
}
