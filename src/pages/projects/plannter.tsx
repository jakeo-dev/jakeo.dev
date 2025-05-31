import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCover from "@/components/ProjectCover";

export default function Plannter() {
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

      <ProjectCover
        title="Plannter"
        desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
        createDate="January 2023"
        updateDate="September 2024"
        logoImg="https://plannter.jakeo.dev/plannter-icon-dark.png"
        toolsList={["Next.js", "TypeScript", "Tailwind"]}
      />

      <div className="container post-img-div mx-auto mt-6">
        <ImageCarousel
          images={[
            "/images/plannter-ss-1.png",
            "/images/plannter-ss-2.png",
            "/images/plannter-ss-3.png",
            "/images/plannter-ss-4.png",
            "/images/plannter-ss-5.png",
          ]}
          imagePosition="object-top"
          alts={[
            "Screenshot of Plannter showing GPA and a list of Freshman and Sophomore courses with their grade and advancement level",
            "Screenshot of Plannter showing a list of standardized tests with their scores and date taken",
            "Screenshot of Plannter showing a list of extracurricular activities with titles, descriptions, and amount of time spent for each one",
            "Screenshot of Plannter showing a list of college application essays with their prompts, writing status, word count, date last edited, and corresponding colleges for each one",
            "Screenshot of Plannter showing a list of colleges with their locations, acceptance rates, and application statuses for each one, organized into Reach, Target, and Safety categories",
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
        plan their academic life. You can keep track of coursework, standardized
        tests, and extracurricular activities. It also allows you to prepare for
        college applications by creating a college list and starting essays.
      </p>
      <p className="text">
        I began development in January 2023, with the website only having a
        Coursework and an Activities section. It was originally written using
        HTML, Tailwind CSS, and JavaScript, until{" "}
        <a href="https://dsns.dev" target="_blank" className="link">
          DSNS
        </a>{" "}
        and I rewrote it using Next.js in September 2024. Now, Plannter has five
        different sections, a GPA calculator, an essay editor, and several other
        useful features.
      </p>
      <p className="text">
        The name "Plannter" is a portmanteau of the words "planner" and "plant."
        "Alumnac" (a portmanteau of "alumnus" and "almanac") was also
        considered, but I think "Plannter" fits the website's purpose better.
      </p>
      <p className="text">
        The original Plannter icon was just the Font Awesome plant icon colored
        green, but I eventually drew my own and started using it in July 2024.
      </p>
    </>
  );
}
