import CommonHead from "../../components/CommonHead";
import Header from "../../components/Header";
import Project from "../../components/Project";
import Button from "../../components/Button";
import SecButton from "../../components/SecButton";

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

      {/* header */}
      <Header />

      {/* projects */}
      <h2 className="sub1title mt-0">My projects</h2>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name="Cifra"
            desc="Discover hidden words in your phone number to make it fun and unforgettable."
            releaseDate="February 2023"
            updateDate="July 2023"
            showReleaseDate={true}
            showUpdateDate={true}
            img={require("../../../public/images/cifra-ss-2.png")}
            showImg={true}
          >
            <Button className="" href={`https://cifra.jakeo.dev`}>
              Visit
            </Button>
            <SecButton className="" href={`https://github.com/jakeo-dev/cifra`}>
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Plannter"
            desc="Keep track of and plan for all your high school courses, activities, and tests."
            releaseDate="January 2023"
            updateDate="August 2023"
            showReleaseDate={true}
            showUpdateDate={true}
            img={require("../../../public/images/plannter-ss-1.png")}
            showImg={true}
          >
            <Button className="" href={`https://plannter.jakeo.dev`}>
              Visit
            </Button>
            <SecButton
              className=""
              href={`https://github.com/jakeo-dev/plannter`}
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Yearn"
            desc="Organize gifts that you yearn for into a simple list."
            releaseDate="November 2022"
            updateDate="December 2023"
            showReleaseDate={true}
            showUpdateDate={true}
            img={require("../../../public/images/yearn-ss-1.png")}
            showImg={true}
          >
            <Button className="" href={`https://yearn.jakeo.dev`}>
              Visit
            </Button>
            <SecButton className="" href={`https://github.com/jakeo-dev/yearn`}>
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Text Filter"
            desc="Filter unwanted strings from text in a number of different ways."
            releaseDate="August 2022"
            updateDate="October 2023"
            showReleaseDate={true}
            showUpdateDate={true}
            img={require("../../../public/images/filter-ss-1.png")}
            showImg={true}
          >
            <Button className="" href={`https://filter.jakeo.dev`}>
              Visit
            </Button>
            <SecButton
              className=""
              href={`https://github.com/jakeo-dev/text-filter`}
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Cerebric"
            desc="A speed typing website to help you study."
            releaseDate="May 2022"
            updateDate="December 2022"
            showReleaseDate={true}
            showUpdateDate={true}
            img={require("../../../public/images/cerebric-ss-2.png")}
            showImg={true}
          >
            <Button className="" href={`https://cerebric.jakeo.dev`}>
              Visit
            </Button>
            <SecButton
              className=""
              href={`https://github.com/jakeo-dev/cerebric`}
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Decorate a Tree"
            desc="Decorate your own digital Christmas tree with various ornaments, candy canes, lights, and more."
            releaseDate="December 2021"
            updateDate="December 2023"
            showReleaseDate={true}
            showUpdateDate={true}
            img={require("../../../public/images/tree-ss-1.png")}
            showImg={true}
          >
            <Button className="" href={`https://tree.jakeo.dev`}>
              Visit
            </Button>
            <SecButton
              className=""
              href={`https://github.com/jakeo-dev/decorate-a-tree`}
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Colorful Bunnies"
            desc="Browse and download some colorful bunnies individually, in collections, or in banners."
            releaseDate="March 2021"
            updateDate="September 2023"
            showReleaseDate={true}
            showUpdateDate={true}
            img={require("../../../public/images/bunnies-ss-1.png")}
            showImg={true}
          >
            <Button className="" href={`https://bunnies.jakeo.dev`}>
              Visit
            </Button>
            <SecButton
              className=""
              href={`https://github.com/jakeo-dev/bunnies`}
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="JakeO.dev"
            desc="You're already here — check out all my projects and blog posts."
            releaseDate="September 2020"
            /* domain bought (google sites): sep 2020
            original files created (html/css/js): may 2021
            first uploaded to github: may 2022 */
            updateDate="January 2024"
            showReleaseDate={true}
            showUpdateDate={true}
            img={require("../../../public/images/main-ss-1.png")}
            showImg={true}
          >
            <SecButton
              className=""
              href={`https://github.com/jakeo-dev/jakeo.dev`}
            >
              GitHub
            </SecButton>
          </Project>
        </div>
      </div>
    </>
  );
}
