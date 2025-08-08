import CommonHead from "@/components/CommonHead";
import MasonryLayout from "@/components/MasonryLayout";
import Project from "@/components/projects/Project";

export default function Projects() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: Projects</title>
        <meta property="og:title" content="JakeO: Projects" />
        <meta
          property="og:description"
          content="Browse my various programming projects."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* current projects */}
      <h2 className="sub1title mt-0">My projects</h2>

      <div className="block md:flex">
        <MasonryLayout
          defaultCols={1}
          smCols={1}
          mdCols={2}
          lgCols={2}
          xlCols={2}
          className="flex w-full"
          columnClassName="bg-clip-padding px-2 md:px-3 first:pl-0 last:pr-0"
        >
          <Project
            name="Everydle"
            desc="Play every game of Wordle at the same time."
            updateDate="July 2025"
            toolsList={["Next.js", "TypeScript", "Tailwind"]}
            logo="https://everydle.jakeo.dev/favicon.ico"
            showLogo
            type={0}
            colors="hover:border-lime-600"
            link="https://everydle.jakeo.dev"
          />

          <Project
            name="Plannter"
            desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
            updateDate="September 2024"
            toolsList={["Next.js", "TypeScript", "Tailwind"]}
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo
            type={0}
            colors="hover:border-emerald-600"
            link="https://plannter.jakeo.dev"
          />

          <Project
            name="Pairckle"
            desc="Easily rank your favorite things with pairwise comparisons."
            updateDate="March 2025"
            toolsList={["Next.js", "TypeScript", "Tailwind"]}
            logo="https://pairckle.jakeo.dev/pairckle-icon.png"
            showLogo
            type={0}
            colors="hover:border-orange-600"
            link="https://pairckle.jakeo.dev"
          />

          <Project
            name="Cifra"
            desc="Generate vanity numbers from your own phone number to make it unforgettable."
            updateDate="March 2025"
            toolsList={["JavaScript", "Tailwind"]}
            logo="https://cifra.jakeo.dev/cifra-logo.png"
            showLogo
            type={0}
            colors="hover:border-yellow-600"
            link="https://cifra.jakeo.dev"
          />

          <Project
            name="JakeO.dev"
            desc="You're already here — check out all of my projects and blog posts."
            /* domain bought (made w/ google sites): sep 4 2020
            original files created (html/css/js): may 28 2021
            first uploaded to github: may 21 2022
            switched from jorch.xyz to jakeo.dev: dec 11 2022 */
            updateDate="June 2025"
            toolsList={["Next.js", "TypeScript", "Tailwind"]}
            logo="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
            showLogo
            type={0}
            link="https://jakeo.dev"
          />
        </MasonryLayout>
      </div>

      {/* past projects */}
      <h2 className="sub1title">Past projects</h2>

      <div className="block md:flex">
        <MasonryLayout
          defaultCols={1}
          smCols={1}
          mdCols={2}
          lgCols={2}
          xlCols={2}
          className="flex w-full"
          columnClassName="bg-clip-padding px-2 md:px-3 first:pl-0 last:pr-0"
        >
          <Project
            name="Linked"
            desc="Link five words together in a fun and simple word game."
            updateDate="July 2024"
            toolsList={["React Native", "Next.js", "TypeScript", "Tailwind"]}
            logo="https://linked.jakeo.dev/images/icon-transparent.png"
            showLogo
            type={1}
            link="https://linked.jakeo.dev"
          />

          <Project
            name="B-52's font"
            desc="Try out and download a font based on the B-52's logo."
            updateDate="December 2024"
            logo=""
            type={1}
            link="https://b52s-font.jakeo.dev/"
          />

          <Project
            name="Decorate a Tree"
            desc="Decorate your own digital Christmas tree with various ornaments, candy canes, lights, and more."
            toolsList={["JavaScript", "Tailwind"]}
            logo="https://decorate-a-tree.jakeo.dev/candy-cane-red-left.png"
            showLogo
            type={1}
            link="https://tree.jakeo.dev"
          />

          <Project
            name="Yearn"
            desc="Organize everything you yearn for into a simple list."
            toolsList={["JavaScript", "Tailwind"]}
            logo="https://yearn.jakeo.dev/yearn-logo.png"
            type={1}
            link="https://yearn.jakeo.dev"
          />

          <Project
            name="Cerebric"
            desc="A speed typing website to help you study."
            toolsList={["JavaScript", "Tailwind"]}
            logo="https://cerebric.jakeo.dev/cerebric-logo-inverted.ico"
            type={1}
            link="https://cerebric.jakeo.dev"
          />

          <Project
            name="Colorful Bunnies"
            desc="Browse and download some colorful bunnies made for every occasion."
            toolsList={["JavaScript", "Tailwind"]}
            logo="https://bunnies.jakeo.dev/images/orange-bunny-2022.png"
            showLogo
            type={1}
            link="https://bunnies.jakeo.dev"
          />
        </MasonryLayout>
      </div>
    </>
  );
}
