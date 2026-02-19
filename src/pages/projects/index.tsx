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
      <h1 className="sub0title mt-0 mb-2">My projects</h1>

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
            desc="Every game of Wordle at the same time."
            toolsList={["Next.js", "React", "TypeScript"]}
            logo="https://everydle.jakeo.dev/favicon.ico"
            showLogo
            type={0}
            colors="hover:border-lime-600 hover:shadow-lime-500/30"
            link="https://everydle.jakeo.dev"
          />

          <Project
            name="Pairckle"
            desc="Rank your favorite things easily, accurately, and pairwisely."
            toolsList={["Next.js", "React", "TypeScript"]}
            logo="https://pairckle.jakeo.dev/pairckle-icon.png"
            showLogo
            type={0}
            colors="hover:border-orange-600 hover:shadow-orange-500/30"
            link="https://pairckle.jakeo.dev"
          />

          <Project
            name="MajorMap"
            desc="An interactive flowchart for degree progress planning."
            toolsList={["Next.js", "React", "TypeScript"]}
            logo="https://i.imgur.com/XMdP1LU.png"
            showLogo
            type={0}
            colors="hover:border-[#5261a3] hover:shadow-[#6777c2]/30"
            link="https://majormap.vercel.app"
          />

          <Project
            name="WashWise"
            desc="Discover and reduce the impact of your showers."
            toolsList={["Expo", "React Native", "TypeScript"]}
            logo="https://washwise.jakeo.dev/favicon.png"
            showLogo
            type={0}
            colors="hover:border-blue-600 hover:shadow-blue-500/30"
            link="https://washwise.jakeo.dev/mobile"
          />

          <Project
            name="Plannter"
            desc="A high school course planner, extracurricular tracker, and college application tool all in one."
            toolsList={["Next.js", "React", "TypeScript"]}
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo
            type={0}
            colors="hover:border-emerald-600 hover:shadow-emerald-500/30"
            link="https://plannter.jakeo.dev"
          />

          <Project
            name="JakeO.dev"
            desc="You're already here — check out my projects and blog posts."
            /* domain bought (made w/ google sites): sep 4 2020
            original files created (html/css/js): may 28 2021
            first commit to github: may 21 2022
            switched from jorch.xyz to jakeo.dev: dec 11 2022 */
            toolsList={["Next.js", "React", "TypeScript"]}
            logo="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
            showLogo
            type={0}
            link="https://jakeo.dev"
          />
        </MasonryLayout>
      </div>

      {/* past projects */}
      <h1 className="sub0title mb-2">Past projects</h1>

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
            name="Cifra"
            desc="Generate vanity numbers from your own phone number to make it unforgettable."
            toolsList={["JavaScript"]}
            logo="https://cifra.jakeo.dev/cifra-logo.png"
            showLogo
            type={1}
            colors="hover:border-yellow-600"
            link="https://cifra.jakeo.dev"
          />

          <Project
            name="B-52's font"
            desc="A typeface based on the B-52's logo."
            logo=""
            type={1}
            link="https://b52s-font.jakeo.dev/"
          />

          <Project
            name="Decorate a Tree"
            desc="Decorate your own digital Christmas tree."
            toolsList={["JavaScript"]}
            logo="https://decorate-a-tree.jakeo.dev/candy-cane-red-left.png"
            showLogo
            type={1}
            link="https://tree.jakeo.dev"
          />

          <Project
            name="Linked"
            desc="Link five words together in a simple word game."
            toolsList={["React Native", "Next.js", "React", "TypeScript"]}
            logo="https://linked.jakeo.dev/images/icon-transparent.png"
            showLogo
            type={1}
            link="https://linked.jakeo.dev"
          />

          <Project
            name="Yearn"
            desc="Organize everything you yearn for into a simple list."
            toolsList={["JavaScript"]}
            logo="https://yearn.jakeo.dev/yearn-logo.png"
            type={1}
            link="https://yearn.jakeo.dev"
          />

          <Project
            name="Cerebric"
            desc="A speed typing website to help you study."
            toolsList={["JavaScript"]}
            logo="https://cerebric.jakeo.dev/cerebric-logo-inverted.ico"
            type={1}
            link="https://cerebric.jakeo.dev"
          />

          <Project
            name="Colorful Bunnies"
            desc="A gallery of some colorful bunnies made for every occasion."
            toolsList={["JavaScript"]}
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
