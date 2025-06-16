import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import Image from "next/image";
import ProjectCover from "@/components/projects/ProjectCover";

export default function Linked() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: About Linked</title>
        <meta property="og:title" content="JakeO: About Linked" />
        <meta
          property="og:description"
          content="Linked is a word puzzle game where you link five words by their first and last letters."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="Linked"
        desc="Link five words together in a fun and simple word game."
        createDate="June 2024"
        updateDate="July 2024"
        logoImg="https://linked.jakeo.dev/images/icon-transparent.png"
        toolsList={["React Native", "Next.js", "TypeScript", "Tailwind"]}
      />

      <div className="post-img-div mt-6">
        <Image
          src={require("../../../public/images/linked-ss-1.png")}
          alt={`Screenshot of Linked showing the game being played, with the words "deaf," "fiend," "diodes," and the fourth word not fully typed`}
          className="post-img"
          placeholder="blur"
        />
      </div>

      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <Button
          className="flex-1 border-blue-600 bg-blue-600 hover:border-blue-700 hover:bg-blue-700 active:border-blue-800 active:bg-blue-800"
          href="https://linked.jakeo.dev"
        >
          Visit website
        </Button>
        <Button
          className="flex-1 border-blue-600 bg-blue-600 hover:border-blue-700 hover:bg-blue-700 active:border-blue-800 active:bg-blue-800"
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
        app. The game was released in June 2024, with the website built in
        Next.js and the app in React Native.
      </p>
      <p className="text">
        Building the app was the first time I used React Native. I tried to make
        a unique puzzle that felt like it could be included with the other New
        York Times word games. Before Linked's release, I changed the game's
        core mechanics many times to make sure it was generally easy to
        understand, fun, original, and balanced.
      </p>
    </>
  );
}
