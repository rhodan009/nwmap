import type { AppProps } from "next/app";
import { useEffect } from "react";
import { initPlausible } from "../lib/stats";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initPlausible();
  }, []);

  return <Component {...pageProps} />;
}
