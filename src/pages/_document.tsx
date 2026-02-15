import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mx-auto max-w-[54rem] bg-gradient-to-br from-stone-50 to-stone-100 px-8 pb-16 text-center font-[350] text-stone-800 transition-all selection:bg-blue-950/80 selection:text-white md:pb-20">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
