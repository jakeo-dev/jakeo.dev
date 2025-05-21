import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import Image from "next/image";
import ProjectCover from "@/components/ProjectCover";

export default function Everydle() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: About Everydle</title>
        <meta property="og:title" content="JakeO.dev: About Everydle" />
        <meta
          property="og:description"
          content="A more detailed description about Everydle"
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
        updateDate="May 2025"
        logoImg=""
        toolsList={["Next.js", "TypeScript", "Tailwind"]}
      />

      <div className="postImgDiv mt-6">
        <Image
          src={require("../../../public/images/everydle-ss-1.png")}
          alt={`Screenshot of Everydle showing the game being played`}
          className="postImg"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 my-6">
        <Button
          className="border-lime-600 hover:border-lime-700 active:border-lime-800 bg-lime-600 hover:bg-lime-700 active:bg-lime-800"
          href="https://everydle.jakeo.dev"
        >
          Visit website
        </Button>
        <SecButton className="" href="https://github.com/jakeo-dev/everydle">
          View GitHub
        </SecButton>
      </div>

      <p className="text">
        Everydle is a website where you can play every single game of Wordle at
        the same time. It was created in May 2025, built using Next.js.
      </p>
      <p className="text">
        When Dordle, Quordle, Octordle, Sedecordle, Duotrigordle, and
        Sexagintaquattordle aren't enough, there's Everydle. No longer do you
        need to spend five minutes solving the daily Wordle, just do all of them
        at once in one extremely long sitting, and never worry about missing a
        day again.
      </p>
    </>
  );
}
