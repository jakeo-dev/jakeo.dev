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
      <Header currentPage="projects" />

      {/* current projects */}
      <h2 className="sub1title mt-0">My projects</h2>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name="Plannter"
            desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
            releaseDate="January 2023"
            updateDate="September 2024"
            img={require("../../../public/images/plannter-ss-1.png")}
            showImg={true}
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo={true}
          >
            <Button className="" href="https://plannter.jakeo.dev">
              Visit
            </Button>
            <SecButton
              className=""
              href="https://github.com/jakeo-dev/plannter"
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Cifra"
            desc="Generate vanity numbers from your own phone number to make it unforgettable."
            releaseDate="February 2023"
            updateDate="June 2024"
            img={require("../../../public/images/cifra-ss-2.png")}
            showImg={true}
            logo="https://cifra.jakeo.dev/cifra-logo.png"
            showLogo={true}
          >
            <Button className="" href="https://cifra.jakeo.dev">
              Visit
            </Button>
            <SecButton className="" href="https://github.com/jakeo-dev/cifra">
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Linked"
            desc="A fun and simple word puzzle game to test your brain."
            releaseDate="June 2024"
            updateDate="July 2024"
            img={require("../../../public/images/linked-ss-1.png")}
            showImg={true}
            logo="https://linked.jakeo.dev/icon-transparent.png"
            showLogo={true}
          >
            <Button className="" href="https://linked.jakeo.dev">
              Website
            </Button>
            <Button className="" href="https://linked.jakeo.dev/mobile">
              App
            </Button>
          </Project>

          <Project
            name="JakeO.dev"
            desc="You're already here — check out all of my projects and blog posts."
            releaseDate="September 2020"
            /* domain bought (made w/ google sites): sep 4 2020
            original files created (html/css/js): may 28 2021
            first uploaded to github: may 21 2022 */
            updateDate="September 2024"
            img={require("../../../public/images/main-ss-1.png")}
            showImg={true}
            logo="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
            showLogo={true}
          >
            <SecButton
              className=""
              href="https://github.com/jakeo-dev/jakeo.dev"
            >
              GitHub
            </SecButton>
          </Project>
        </div>
      </div>

      {/* old projects */}
      <h2 className="sub1title">Past projects</h2>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name="Yearn"
            desc="Organize gifts that you yearn for into a simple list."
            releaseDate="November 2022"
            updateDate="December 2023"
            img={require("../../../public/images/yearn-ss-1.png")}
            showImg={true}
            logo="https://yearn.jakeo.dev/yearn-logo.png"
            showLogo={false}
          >
            <Button className="" href="https://yearn.jakeo.dev">
              Visit
            </Button>
            <SecButton className="" href="https://github.com/jakeo-dev/yearn">
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Text Filter"
            desc="Filter unwanted strings from text in a number of different ways."
            releaseDate="August 2022"
            updateDate="October 2023"
            img={require("../../../public/images/filter-ss-1.png")}
            showImg={true}
            logo=""
            showLogo={false}
          >
            <Button className="" href="https://filter.jakeo.dev">
              Visit
            </Button>
            <SecButton
              className=""
              href="https://github.com/jakeo-dev/text-filter"
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Cerebric"
            desc="A speed typing website to help you study."
            releaseDate="May 2022"
            updateDate="December 2022"
            img={require("../../../public/images/cerebric-ss-2.png")}
            showImg={true}
            logo="https://cerebric.jakeo.dev/cerebric-logo-inverted.ico"
            showLogo={true}
          >
            <Button className="" href="https://cerebric.jakeo.dev">
              Visit
            </Button>
            <SecButton
              className=""
              href="https://github.com/jakeo-dev/cerebric"
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Decorate a Tree"
            desc="Decorate your own digital Christmas tree with various ornaments, candy canes, lights, and more."
            releaseDate="December 2021"
            updateDate="December 2023"
            img={require("../../../public/images/tree-ss-1.png")}
            showImg={true}
            logo="https://decorate-a-tree.jakeo.dev/candy-cane-red-left.png"
            showLogo={true}
          >
            <Button className="" href="https://tree.jakeo.dev">
              Visit
            </Button>
            <SecButton
              className=""
              href="https://github.com/jakeo-dev/decorate-a-tree"
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Emoticon Generator"
            desc="Generate unique emoticons."
            releaseDate="November 2021"
            updateDate="March 2023"
            img={require("../../../public/images/emoticons-ss-1.png")}
            showImg={true}
            logo=""
            showLogo={false}
          >
            <Button className="" href="https://emoticons.jakeo.dev">
              Visit
            </Button>
            <SecButton
              className=""
              href="https://github.com/jakeo-dev/emoticons"
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Colorful Bunnies"
            desc="Browse and download some colorful bunnies individually, in collections, or in banners."
            releaseDate="March 2021"
            updateDate="September 2023"
            img={require("../../../public/images/bunnies-ss-1.png")}
            showImg={true}
            logo="https://bunnies.jakeo.dev/images/orange-bunny-2022.png"
            showLogo={true}
          >
            <Button className="" href="https://bunnies.jakeo.dev">
              Visit
            </Button>
            <SecButton className="" href="https://github.com/jakeo-dev/bunnies">
              GitHub
            </SecButton>
          </Project>
        </div>
      </div>
    </>
  );
}
