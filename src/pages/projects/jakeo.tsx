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
          content="A more detailed description about this website"
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
        updateDate="June 2025"
        logoImg="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        toolsList={["Next.js", "TypeScript", "Tailwind"]}
      />

      <div className="post-img-div mt-6">
        <Image
          src={require("../../../public/images/main-ss-1.png")}
          alt="Screenshot of JakeO.dev showing the home page, including some projects and posts"
          className="post-img"
          placeholder="blur"
        />
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
        I used Google Sites to build the first version of this website in
        September 2020, switched to HTML/CSS/JavaScript in May 2021, then
        started using Tailwind CSS in September 2022, and I most recently
        rewrote everything with Next.js in January 2024. During that time, the
        design was always changing, but I always tried to keep the core of the
        website consistent.
      </p>
      <p className="text">
        This website first lived on the domain Jorch.xyz in September 2020, but
        I eventually switched it to JakeO.dev in December 2022.
      </p>
      <p className="text">
        The bunny you see in the header is just the Android rabbit emoji without
        any of its features. When I first added it to the website, it was just
        the emoji. Sometime in 2021, I colored it light blue, and later just
        kept the silhouette with a light-blue gradient.
      </p>
      <p className="text">
        <a href="https://lexend.com" target="_blank" className="link">
          Lexend Deca
        </a>{" "}
        is the font I use the most throughout this website and my other
        projects. I started using it because it isn't very widely used, and
        according to its designers, it improves reading speed and accuracy. I
        also created a font based on my own handwriting, which I use instead of
        Lexend wherever my name is.
      </p>
    </>
  );
}
