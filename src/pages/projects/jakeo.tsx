import CommonHead from "@/components/CommonHead";
import SecButton from "@/components/SecButton";
import Image from "next/image";
import ProjectCover from "@/components/ProjectCover";

export default function JakeO() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: About this website</title>
        <meta property="og:title" content="JakeO.dev: About this website" />
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
        updateDate="May 2025"
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

      <div className="flex flex-col md:flex-row gap-3 my-6">
        <SecButton
          className="py-1.5"
          href="https://github.com/jakeo-dev/jakeo.dev"
        >
          View GitHub
        </SecButton>
      </div>

      <p className="text">Welcome, you're already here.</p>
      <p className="text">
        JakeO.dev is my main website where I showcase all of my various
        websites, apps, social media profiles, and blog posts.
      </p>
      <p className="text">
        I used Google Sites to build the first version of this website in
        September 2020, but eventually switched to HTML/CSS/JavaScript in May
        2021, where I continued to improve the design and add my new projects. I
        pushed new design changes to the website every few months, only landing
        on the current design in October 2023. I started using Tailwind CSS in
        September 2022, and then rewrote everything with Next.js in January
        2024.
      </p>
      <p className="text">
        This website first lived on the domain Jorch.xyz in September 2020, but
        I switched it to the current one, JakeO.dev, in December 2022.
      </p>
      <p className="text">
        I started using the Android bunny emoji as my "logo" since the first
        version on Google Sites. At first, it was just the emoji, but sometime
        in 2021, I colored it light blue. I later removed all the bunny's
        features and just kept the silhouette with a light-blue gradient.
      </p>
      <p className="text">
        <a href="https://lexend.com" target="_blank" className="link">
          Lexend Deca
        </a>{" "}
        is the font I use the most throughout this website and my other
        projects. I started using it because it isn't very widely used, and
        according to its designers, it improves reading speed and accuracy. I've
        also created a font based on my own handwriting, which I use for this
        website's header title.
      </p>
    </>
  );
}
