import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import SupportWidget from "../components/SupportWidget";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans bg-dark">
      <NavBar />
      <SupportWidget />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
