import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCover from "@/components/projects/ProjectCover";
import Paper from "@/components/Paper";

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
        desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
        createDate="January 2023"
        updateDate="September 2024"
        logoImg="https://plannter.jakeo.dev/plannter-icon-dark.png"
        toolsList={["Next.js", "TypeScript", "Tailwind"]}
        titlePinColor={4}
      />

      <div className="post-img-div container mx-auto mt-6">
        <ImageCarousel
          imagePosition="object-top"
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
        />
      </div>

      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <Button
          className="md:flex-1"
          href="https://plannter.jakeo.dev"
          bgColor={4}
        >
          <span>Visit website</span>
        </Button>
        <Button
          className="md:flex-[0.5]"
          href="https://github.com/jakeo-dev/plannter"
        >
          View GitHub
        </Button>
        <Button
          className="md:flex-[0.5]"
          href="https://github.com/jakeo-dev/old-plannter"
        >
          View old GitHub
        </Button>
      </div>

      <Paper speed="off" pinColor={4}>
        <p className="text">
          Plannter is a website that allows high school students to manage and
          plan their academic life. You can keep track of coursework,
          standardized tests, and extracurricular activities. It also allows you
          to prepare for college applications by creating a college list and
          starting essays.
        </p>
        <p className="text">
          I began development in January 2023, with the website only having a
          Coursework and an Activities section. It was originally written using
          HTML/Tailwind CSS/JavaScript until{" "}
          <a href="https://dsns.dev" target="_blank" className="link">
            DSNS
          </a>{" "}
          and I rewrote it using Next.js in September 2024. Now, Plannter has
          five different sections, a GPA calculator, an essay editor, and
          several other useful features.
        </p>
        <p className="text">
          The name "Plannter" is a portmanteau of the words "planner" and
          "plant." I also considered the name "Alumnac" (a portmanteau of
          "alumnus" and "almanac"), but I think "Plannter" fits the website's
          purpose better.
        </p>
      </Paper>
    </>
  );
}
