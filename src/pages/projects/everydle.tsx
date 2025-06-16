import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCover from "@/components/projects/ProjectCover";

export default function Everydle() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: About Everydle</title>
        <meta property="og:title" content="JakeO: About Everydle" />
        <meta
          property="og:description"
          content="Everydle is a website where you can play every single game of Wordle at the same time."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="Everydle"
        desc="Play every game of Wordle at the same time."
        createDate="May 2025"
        updateDate="June 2025"
        logoImg="https://everydle.jakeo.dev/favicon.ico"
        toolsList={["Next.js", "TypeScript", "Tailwind"]}
      />

      <div className="post-img-div container mx-auto mt-6">
        <ImageCarousel
          imagePosition="object-center"
          images={[
            {
              src: "/images/everydle-ss-1.png",
              alt: "Screenshot of Everydle showing the game being played in classic mode",
            },
            {
              src: "/images/everydle-ss-2.png",
              alt: "Screenshot of Everydle showing the game being played in compact mode",
            },
          ]}
        />
      </div>

      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <Button
          className="border-lime-600 bg-lime-600 hover:border-lime-700 hover:bg-lime-700 active:border-lime-800 active:bg-lime-800"
          href="https://everydle.jakeo.dev"
        >
          Visit website
        </Button>
        <SecButton href="https://github.com/jakeo-dev/everydle">
          View GitHub
        </SecButton>
      </div>

      <p className="text">
        Everydle is a website where you can play every single game of Wordle at
        the same time. I made the first version using Next.js in May 2025.
      </p>
      <p className="text">
        When{" "}
        <a
          href="https://zaratustra.itch.io/dordle"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Dordle
        </a>
        ,{" "}
        <a
          href="https://www.merriam-webster.com/games/quordle/#/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Quordle
        </a>
        ,{" "}
        <a
          href="https://www.britannica.com/games/octordle/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Octordle
        </a>
        ,{" "}
        <a
          href="https://www.sedecordle.com/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Sedecordle
        </a>
        ,{" "}
        <a
          href="https://duotrigordle.com/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Duotrigordle
        </a>
        , and{" "}
        <a
          href="https://64ordle.au/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Sexaginta-quattordle
        </a>{" "}
        aren't enough, there's Everydle. No longer do you need to spend five
        minutes solving the daily Wordle, just do all of them at once in one
        extremely long sitting, and never worry about missing a day again.
      </p>
      <p className="text">
        Here are my favorite comments about the website (some of which I also
        included in the list of random taglines that appear under the title of
        the website):
      </p>
      <ul className="text list-inside list-disc">
        <li className="text">
          <a
            href="https://www.metafilter.com/208826/Just-because-you-can-doesnt-mean-you-should#:~:text=This%20is%20very%20funny%2C%20basically,with%20an%20increasingly%20unuseable%20UI%22."
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            "This is very funny, basically 're-type the wordle word list with an
            increasingly unuseable UI'."
          </a>
        </li>
        <li className="text">
          <a
            href="https://www.metafilter.com/208826/Just-because-you-can-doesnt-mean-you-should#:~:text=Oh%20it%20gets%20worse%20200%20words%20in"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            "Oh it gets worse 200 words in"
          </a>
        </li>
        <li className="text">
          <a
            href="https://webcurios.co.uk/webcurios-23-05-25/#:~:text=This%20is%20HORRIBLE%20and%20made,get%20my%20head%20around%20it"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            "This is HORRIBLE and made me feel slightly queasy as I tried to get
            my head around it"
          </a>
        </li>
        <li className="text">
          <a
            href="https://www.microsiervos.com/archivo/juegos-y-diversion/everydle-resolver-todos-wordle.html#:~:text=es%20m%C3%A1s%20que%20un%20juego%2C,guerra%20a%20tu%20tiempo%20libre"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            "es más que un juego, es una declaración de guerra a tu tiempo
            libre"{" "}
            <i>
              (it is more than a game, it is a declaration of war on your free
              time)
            </i>
          </a>
        </li>
        <li className="text">
          <a
            href="https://b3ta.com/newsletter/issue949/#:~:text=W****e%20of%20%0A%20%20the,of%20the%20last%20187%20weeks"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            "[Wordle] of the week is [wordle] of the last 187 weeks"
          </a>
        </li>
        <li className="text">
          <a
            href="https://www.metafilter.com/208826/Just-because-you-can-doesnt-mean-you-should#:~:text=This%20is%20wonderfully%20stupid"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            "This is wonderfully stupid"
          </a>
        </li>
      </ul>
    </>
  );
}
