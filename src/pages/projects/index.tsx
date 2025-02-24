import CommonHead from "@/components/CommonHead";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: Projects</title>
        <meta property="og:title" content="JakeO.dev: Projects" />
        <meta property="og:description" content="Projects from JakeO.dev" />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* current projects */}
      <h2 className="sub1title mt-0">My projects</h2>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name="Plannter"
            desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
            releaseDate=""
            updateDate="Sep 2024"
            madeWith="Next.js"
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo={true}
            type={0}
            colors="hover:border-emerald-600"
            link="https://plannter.jakeo.dev"
          />

          <Project
            name="Pairckle"
            desc="Easily rank your favorite things with pairwise comparisons."
            releaseDate=""
            updateDate="Feb 2025"
            madeWith="Next.js"
            logo="https://pairckle.jakeo.dev/pairckle-icon.png"
            showLogo={true}
            type={0}
            colors="hover:border-orange-600"
            link="https://pairckle.jakeo.dev"
          />

          <Project
            name="Cifra"
            desc="Generate vanity numbers from your own phone number to make it unforgettable."
            releaseDate=""
            updateDate="Jun 2024"
            madeWith="JavaScript"
            logo="https://cifra.jakeo.dev/cifra-logo.png"
            showLogo={true}
            type={0}
            colors="hover:border-yellow-600"
            link="https://cifra.jakeo.dev"
          />

          <Project
            name="Linked"
            desc="A fun and simple word puzzle game to test your brain."
            releaseDate=""
            updateDate="Jul 2024"
            madeWith="Next.js, React Native"
            logo="https://linked.jakeo.dev/images/icon-transparent.png"
            showLogo={true}
            type={0}
            colors="hover:border-blue-600"
            link="https://linked.jakeo.dev"
          />

          <Project
            name="JakeO.dev"
            desc="You're already here — check out all of my projects and blog posts."
            releaseDate=""
            /* domain bought (made w/ google sites): sep 4 2020
            original files created (html/css/js): may 28 2021
            first uploaded to github: may 21 2022
            switched from jorch.xyz to jakeo.dev: dec 11 2022 */
            updateDate="Feb 2025"
            madeWith="Next.js"
            logo="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
            showLogo={true}
            type={0}
            colors=""
            link="https://jakeo.dev"
          />
        </div>
      </div>

      {/* past projects */}
      <h2 className="sub1title">Past projects</h2>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name="Yearn"
            desc="Organize gifts that you yearn for into a simple list."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo="https://yearn.jakeo.dev/yearn-logo.png"
            showLogo={false}
            type={1}
            colors=""
            link="https://yearn.jakeo.dev"
          />

          <Project
            name="Text Filter"
            desc="Filter unwanted strings from text in a number of different ways."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo=""
            showLogo={false}
            type={1}
            colors=""
            link="https://filter.jakeo.dev"
          />

          <Project
            name="Cerebric"
            desc="A speed typing website to help you study."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo="https://cerebric.jakeo.dev/cerebric-logo-inverted.ico"
            showLogo={true}
            type={1}
            colors=""
            link="https://cerebric.jakeo.dev"
          />

          <Project
            name="Decorate a Tree"
            desc="Decorate your own digital Christmas tree with various ornaments, candy canes, lights, and more."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo="https://decorate-a-tree.jakeo.dev/candy-cane-red-left.png"
            showLogo={true}
            type={1}
            colors=""
            link="https://tree.jakeo.dev"
          />

          <Project
            name="Emoticon Generator"
            desc="Generate unique emoticons."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo=""
            showLogo={false}
            type={1}
            colors=""
            link="https://emoticons.jakeo.dev"
          />

          <Project
            name="Colorful Bunnies"
            desc="Browse and download some colorful bunnies individually, in collections, or in banners."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo="https://bunnies.jakeo.dev/images/orange-bunny-2022.png"
            showLogo={true}
            type={1}
            colors=""
            link="https://bunnies.jakeo.dev"
          />
        </div>
      </div>
    </>
  );
}
