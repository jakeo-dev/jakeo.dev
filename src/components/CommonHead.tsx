import Head from "next/head";

export default function CommonHead(props: { children: React.ReactNode }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        rel="shortcut icon"
        type="image/ico"
      />
      {props.children}
    </Head>
  );
}
