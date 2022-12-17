import type { AppProps } from "next/app";
import { useEffect } from "react";
import { initPlausible } from "../lib/stats";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initPlausible();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
