import { NextConfig } from "next";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: NextConfig) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
