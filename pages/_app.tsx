import "@/styles/globals.css";
import { ThemeProvider, theme } from "@reusejs/react";
import buttonTheme from "../components/buttonVariant";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider value={buttonTheme}r>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
