import CommonHead from "@/components/CommonHead";
import SecButton from "@/components/SecButton";
import Image from "next/image";
import ProjectCover from "@/components/projects/ProjectCover";

export default function JakeO() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: About this website</title>
        <meta property="og:title" content="JakeO: About this website" />
        <meta
          property="og:description"
          content="JakeO.dev is my personal/portfolio website where you can find all of my projects, posts, and profiles."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="JakeO.dev"
        desc="You're already here — check out all of my projects and blog posts."
        createDate="September 2020"
        updateDate="August 2025"
        logoImg="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        toolsList={["Next.js", "TypeScript", "Tailwind"]}
      />

      <div className="post-img relative container mx-auto h-56 w-full bg-sky-500/50 sm:h-96 md:h-[460px]">
        <div className="absolute top-1/2 left-1/2 h-48 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:h-80 md:h-[380px]">
          <Image
            src={require("/public/images/main-ss-1.png")}
            alt="Screenshot of JakeO.dev showing the home page, including some projects and posts"
            className="rounded-md object-cover object-top shadow-md"
            placeholder="blur"
            fill
          />
        </div>
      </div>

      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <SecButton
          className="py-1.5"
          href="https://github.com/jakeo-dev/jakeo.dev"
        >
          View GitHub
        </SecButton>
      </div>

      <p className="text">
        Welcome, you're already here. JakeO.dev is my personal/portfolio website
        where you can find all of my projects, posts, and profiles.
      </p>
      <p className="text">
        I used Google Sites to build the first version of this website at
        Jorch.xyz in September 2020, began actually programming by switching to
        HTML/CSS/JavaScript in May 2021, changed the domain to JakeO.dev in
        December 2022, and rewrote everything with Next.js in January 2024. This
        website has been constantly changing, but I always try to keep the core
        of it consistent.
      </p>
      <p className="text">
        <a href="https://lexend.com" target="_blank" className="link">
          Lexend Deca
        </a>{" "}
        is the typeface I use the most throughout this website and my other
        projects. I started using it because, according to its designers, it
        improves reading speed and accuracy. I also created a font based on my
        own handwriting, which I occasionally use here instead of Lexend.
      </p>
    </>
  );
}
