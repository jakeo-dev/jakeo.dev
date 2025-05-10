import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import Image from "next/image";
import ProjectCover from "@/components/ProjectCover";

export default function Linked() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: About Linked</title>
        <meta property="og:title" content="JakeO.dev: About Linked" />
        <meta
          property="og:description"
          content="A more detailed description about Linked"
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="Linked"
        desc="A fun and simple word puzzle game to test your brain."
        createDate="June 2024"
        updateDate="July 2024"
        logoImg="https://linked.jakeo.dev/images/icon-transparent.png"
        toolsList={["React Native", "Next.js", "TypeScript", "Tailwind"]}
      />

      <div className="postImgDiv mt-6">
        <Image
          src={require("../../../public/images/linked-ss-1.png")}
          alt={`Screenshot of Linked showing the game being played, with the words "deaf," "fiend," "diodes," and the fourth word not fully typed`}
          className="postImg"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 my-6">
        <Button
          className="flex-1 border-blue-600 hover:border-blue-700 active:border-blue-800 bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          href="https://linked.jakeo.dev"
        >
          Visit website
        </Button>
        <Button
          className="flex-1 border-blue-600 hover:border-blue-700 active:border-blue-800 bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          href="https://linked.jakeo.dev/mobile"
        >
          Download app
        </Button>
        <SecButton
          className="flex-[0.5]"
          href="https://github.com/jakeo-dev/linked-web"
        >
          View GitHub
        </SecButton>
      </div>

      <p className="text">
        Linked is a word puzzle game where you link five words by their first
        and last letters. It can be played either on the website or the Android
        app. The game was released in June 2024, with the website built in React
        and the app in React Native.
      </p>
      <p className="text">
        Building the app was the first time I used React Native. I drew heavy
        inspiration from the simple but satisfying New York Times word games,
        but I still tried to make a unique puzzle. Prior to Linked's release,
        the game's core mechanics underwent several significant changes to make
        the game generally easy to understand, fun, original, and balanced.
      </p>
    </>
  );
}
