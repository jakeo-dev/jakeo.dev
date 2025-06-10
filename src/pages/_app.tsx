import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { useEffect } from "react";

import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/Header";

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    console.log(
      "%cOMG HISIES!!!!!!!!!!!!!! 🐰🐰🐰🐰🐰",
      "color: #8ca6bf; background-color: #f3f4f6; font-size:45px; border-radius:16px; padding:16px;",
    );
  }, []);

  return (
    <main className={lexend.className}>
      {router.pathname != "/404" ? <Header /> : null}
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
