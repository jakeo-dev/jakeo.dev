import CommonHead from "../components/CommonHead";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>Linked Word Game: Privacy Policy</title>
        <meta property="og:title" content="Linked Word Game: Privacy Policy" />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* header */}
      <Header />

      {/* about me */}
      <h2 className="sub1title mt-0">Linked Word Game: Privacy Policy</h2>

      <p className="text">
        No data at all is collected through the Linked Word Game app. The game
        works completely offline and no information about any users is used or
        sent anywhere. No data is stored locally either on the app.
      </p>
      <p className="text">
        If you still have concerns, contact{" "}
        <a href="mailto:hi@jakeo.dev" target="_blank" className="link">
          hi@jakeo.dev
        </a>
        .
      </p>
    </>
  );
}
