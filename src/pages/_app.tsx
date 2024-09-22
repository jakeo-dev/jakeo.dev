import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";

const lexend = Lexend({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lexend.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
