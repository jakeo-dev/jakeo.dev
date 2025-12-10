import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCover from "@/components/projects/ProjectCover";

export default function Plannter() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: About Plannter</title>
        <meta property="og:title" content="JakeO: About Plannter" />
        <meta
          property="og:description"
          content="Plannter is a website that allows high school students to manage and plan their academic life."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="Plannter"
        desc="A high school course planner, extracurricular tracker, and college application tool all in one."
        createDate="January 2023"
        updateDate="September 2024"
        logoImg="https://plannter.jakeo.dev/plannter-icon-dark.png"
        toolsList={["Next.js", "React", "TypeScript"]}
        collaborators={[
          {
            name: "JakeO",
            link: "https://jakeo.dev",
            img: "https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png",
          },
          {
            name: "DSNS",
            link: "https://dsns.dev",
            img: "https://dsns.dev/_astro/kirby.Dz3woPGR_1dV3kX.svg",
          },
        ]}
      />

      <div className="post-img relative container mx-auto h-56 w-full bg-emerald-500/50 sm:h-96 md:h-[460px]">
        <ImageCarousel
          images={[
            {
              src: "/images/plannter-ss-1.png",
              alt: "Screenshot of Plannter showing GPA and a list of Freshman and Sophomore courses with their grade and advancement level",
            },
            {
              src: "/images/plannter-ss-2.png",
              alt: "Screenshot of Plannter showing a list of standardized tests with their scores and date taken",
            },
            {
              src: "/images/plannter-ss-3.png",
              alt: "Screenshot of Plannter showing a list of extracurricular activities with titles, descriptions, and amount of time spent for each one",
            },
            {
              src: "/images/plannter-ss-4.png",
              alt: "Screenshot of Plannter showing a list of college application essays with their prompts, writing status, word count, date last edited, and corresponding colleges for each one",
            },
            {
              src: "/images/plannter-ss-5.png",
              alt: "Screenshot of Plannter showing a list of colleges with their locations, acceptance rates, and application statuses for each one, organized into Reach, Target, and Safety categories",
            },
          ]}
          imagePosition="object-top"
          className="absolute top-1/2 left-1/2 h-48 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:h-80 md:h-[380px]"
          imageClassName="shadow-md"
        />
      </div>

      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <Button
          className="border-emerald-600 bg-emerald-600 shadow-emerald-500/30 hover:border-emerald-700 hover:bg-emerald-700 active:border-emerald-800 active:bg-emerald-800 md:flex-1"
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
        plan their academic life. Track coursework, standardized tests, and
        extracurricular activities, while also preparing for college
        applications by creating a college list and writing essays all in one
        place.
      </p>
      <p className="text">
        See your current and future GPA using a customizable GPA calculator to
        fit any school's grading system. Prepare for college applications by
        organizing activities in a tracker that mimics the one in CommonApp. If
        you've taken both the ACT and SAT, Plannter will automatically suggest
        which test score to submit. Even write essays in a comprehensive editor
        that includes word counts, notes, completion status, and the ability to
        link essays to specific colleges.
      </p>
      <p className="text">
        The name "Plannter" is a portmanteau of the words "planner" and "plant."
      </p>
      {/* <p className="text">
        Plannter's activities section mimics the one in Common App, making it
        easier to prepare for college applications. Time spent per week and per
        year can be added to each activity, and they can also be reordered.
      </p>
      <p className="text">
        Plannter has a comprehensive essay editor, with the ability to add a
        minimum/maximum word count, change the writing completion status, and
        add notes. Colleges can also be linked to certain essays so it is clear
        which institution an essay will be submitted to.
      </p> */}
    </>
  );
}
