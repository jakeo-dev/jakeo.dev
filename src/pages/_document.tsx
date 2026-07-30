import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* bg-gradient-to-br bg-[url(/images/pattern-9-2-1.png)] from-stone-50 to-stone-100 bg-size-[35px] bg-center bg-repeat */}
      <body className="bg-gradient-to-br from-stone-50 to-stone-100 px-8 pb-16 text-center font-[350] text-stone-800 transition-all selection:bg-blue-950/80 selection:text-white md:pb-20">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
