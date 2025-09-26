import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import Image from "next/image";
import ProjectCover from "@/components/projects/ProjectCover";

export default function MajorMap() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: About MajorMap</title>
        <meta property="og:title" content="JakeO: About MajorMap" />
        <meta
          property="og:description"
          content="MajorMap is a website that lets students plan their degree progress using an interactive flowchart."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>
      <ProjectCover
        title="MajorMap"
        desc="An interactive flowchart for degree progress planning."
        createDate="August 2025"
        updateDate="September 2025"
        logoImg="https://majormap.vercel.app/favicon.ico"
        toolsList={["Next.js", "React", "TypeScript"]}
        collaborators={[
          {
            name: "JakeO",
            link: "https://jakeo.dev",
            img: "https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png",
          },
          {
            name: "Shaurya",
            link: "https://shauryav.com",
            img: "https://i.imgur.com/AUi8GVr.jpeg",
          },
        ]}
      />
      <div className="post-img relative container mx-auto h-56 w-full bg-sky-500/50 sm:h-96 md:h-[460px]">
        <div className="absolute top-1/2 left-1/2 h-48 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:h-80 md:h-[380px]">
          <Image
            src={require("/public/images/majormap-ss-1.png")}
            alt="Screenshot of MajorMap showing various courses in a flowchart"
            className="rounded-md object-cover object-top shadow-md"
            placeholder="blur"
            fill
          />
        </div>
      </div>
      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <Button
          className="border-cyan-600 bg-cyan-600 hover:border-cyan-700 hover:bg-cyan-700 active:border-cyan-800 active:bg-cyan-800"
          href="https://majormap.vercel.app"
        >
          Visit website
        </Button>
        <SecButton href="https://github.com/jakeo-dev/majormap">
          View GitHub
        </SecButton>
      </div>
      <p className="text">
        MajorMap is a website that lets students plan their degree progress
        using an interactive flowchart.
      </p>
      <p className="text">
        Drag and drop courses into semesters or quarters, customize class
        details, and instantly see how your academic path comes together. Add
        more terms to your degree pathway, and easily re-arrange your classes to
        experiment with different possible paths. Stay organized as you map out
        your journey from start to graduation.
      </p>
    </>
  );
}
