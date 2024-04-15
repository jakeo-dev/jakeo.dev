import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-100 text-gray-800 text-center max-w-[54rem] selection:bg-blue-950/80 selection:text-white mx-auto px-8 pb-16 md:pb-32 transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
