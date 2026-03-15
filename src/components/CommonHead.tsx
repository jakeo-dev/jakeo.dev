import Head from "next/head";

export default function CommonHead(props: { children: React.ReactNode }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {props.children}
    </Head>
  );
}
