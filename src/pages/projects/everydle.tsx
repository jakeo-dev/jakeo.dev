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
        desc="Every game of Wordle at the same time."
        createDate="May 2025"
        updateDate="October 2025"
        logoImg="https://everydle.jakeo.dev/favicon.ico"
        toolsList={["Next.js", "React", "TypeScript"]}
      />

      <div className="post-img relative container mx-auto h-56 w-full bg-gradient-to-br from-lime-500/50 to-lime-600/50 sm:h-96 md:h-[460px]">
        <ImageCarousel
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
          imagePosition="object-center"
          className="absolute top-1/2 left-1/2 h-48 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:h-80 md:h-[380px]"
          imageClassName="shadow-md"
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
        the same time.
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
        minutes solving the daily Wordle, just play all of them at once in one
        extremely long sitting, and never worry about missing a day again.
      </p>
      <p className="text">
        To improve performance and visibility, compact mode can be enabled or
        the input mode can be switched. You can also attempt to share your
        results (if you're not using Twitter in the 2010s).
      </p>
      <p className="text mb-0">
        How many words can you solve before getting bored and giving up?
      </p>
      <p className="subtext">My high score is 459.</p>
    </>
  );
}
