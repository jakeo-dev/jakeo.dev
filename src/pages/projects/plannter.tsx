import CommonHead from "../../components/CommonHead";
import Header from "../../components/Header";
import Button from "../../components/Button";
import SecButton from "../../components/SecButton";
import Carousel from "@/components/ImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faHammer,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: About Plannter</title>
        <meta property="og:title" content="JakeO.dev: About Plannter" />
        <meta
          property="og:description"
          content="A more detailed description about Plannter"
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* header */}
      <Header currentPage="projects" />

      <div className="sub1title flex items-center pb-0">
        <img
          src="https://plannter.jakeo.dev/plannter-icon-dark.png"
          className="inline w-8 mr-2"
          alt="Plannter logo"
        />
        <h2 className="inline">Plannter</h2>
      </div>

      <p className="sub3title pb-0 mt-0">
        Plan courses, keep track of extracurriculars, prepare for college
        applications, and more.
      </p>

      <div className="postDatesDiv">
        <h2>
          <FontAwesomeIcon icon={faCalendarDay} className="mr-1.5" />
          Released January 2023
        </h2>
        <h2>
          <FontAwesomeIcon icon={faRotateRight} className="mr-1.5" />
          Updated September 2024
        </h2>
        <h2>
          <FontAwesomeIcon icon={faHammer} className="mr-1.5" />
          Made with Next.js
        </h2>
      </div>

      <div className="container postImgDiv">
        <Carousel
          images={[
            "/images/plannter-ss-1.png",
            "/images/plannter-ss-2.png",
            "/images/plannter-ss-3.png",
            "/images/plannter-ss-4.png",
            "/images/plannter-ss-5.png",
          ]}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 my-6">
        <Button
          className="md:flex-1 border-emerald-600 hover:border-emerald-700 active:border-emerald-800 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
          href="https://plannter.jakeo.dev"
        >
          Visit website
        </Button>
        <SecButton
          className="md:flex-[0.5]"
          href="https://github.com/jakeo-dev/plannter"
        >
          View GitHub
        </SecButton>
        <SecButton
          className="md:flex-[0.5]"
          href="https://github.com/jakeo-dev/old-plannter"
        >
          View old GitHub
        </SecButton>
      </div>

      <p className="text">
        Plannter is a website that allows high school students to manage and
        plan various school-related things. You can keep track of your
        coursework, standarized tests and scores, and extracurricular
        activities. You can also prepare for college applications by starting a
        college list and beginning your essays.
      </p>
      <p className="text">
        I originally began development in January 2023, with the website only
        having a Coursework section and an Activities section. It was written
        using HTML, Tailwind CSS, and JavaScript until{" "}
        <a href="https://dsns.dev" target="_blank" className="link">
          DSNS
        </a>{" "}
        and I rewrote it using Next.js in September 2024, adding a few new
        features and updates. Now, Plannter has five different sections, a GPA
        calculator, an essay editor, and several other useful parts.
      </p>
      <p className="text">
        The name "Plannter" is a portmanteau of the words "planner" and "plant."
        "Planner" because the website helps you plan your future, and "plant"
        because...I guess it represents growth. There isn't really a concrete
        reason. Another name I considered was "Alumnac" (a portmanteau of the
        words "alumnus" and "almanac"), but I felt that "Plannter" fit the
        website's purpose better.
      </p>
      <p className="text">
        The original Plannter icon was just the Font Awesome plant icon colored
        green, but I eventually designed my own plant icon in{" "}
        <a href="https://pixlr.com" target="_blank" className="link">
          Pixlr
        </a>{" "}
        and started using it in July 2024.
      </p>
    </>
  );
}
