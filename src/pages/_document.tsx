import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mx-auto max-w-[60rem] bg-stone-100 p-4 text-center text-stone-800 transition-all selection:bg-blue-950/80 selection:text-white md:px-8 md:py-24">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
