import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCover from "@/components/projects/ProjectCover";

export default function AuraFarm() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: About Aura Farm</title>
        <meta property="og:title" content="JakeO: About Aura Farm" />
        <meta property="og:description" content="[AURA FARM DESCRIPTION]" />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="Aura Farm"
        desc="Turn your campus into a real-life game."
        createDate="May 2026"
        updateDate="May 2026"
        logoImg="https://aurafarm.codebox.so/logo.svg"
        logoBig
        toolsList={["Expo", "React Native", "TypeScript"]}
      />

      <div className="post-img relative container mx-auto h-72 w-full rounded-xl bg-gradient-to-br from-red-500/50 to-red-600/50 sm:h-96 md:h-[480px] md:rounded-3xl">
        <ImageCarousel
          images={[
            {
              src: "/images/aura-farm-ss-1.png",
              alt: "Screenshot of Aura Farm showing the user with Orange Aura.",
            },
            {
              src: "/images/aura-farm-ss-2.png",
              alt: "Screenshot of Aura Farm during onboarding with a picture of the Where's Waldo event.",
            },
          ]}
          imagePosition="object-top"
          className="absolute top-1/2 left-1/2 h-64 w-32 -translate-x-1/2 -translate-y-1/2 sm:h-80 sm:w-[30%] md:h-[430px] md:w-[28%]"
          imageClassName="shadow-md"
        />
      </div>

      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <Button
          className="border-red-500 bg-red-500 shadow-red-500/30 hover:border-red-600 hover:bg-red-600 active:border-red-700 active:bg-red-700"
          href="https://aurafarm.codebox.so/"
        >
          Download app
        </Button>
        <SecButton href="https://github.com/codebox-calpoly/AuraFarm">
          View on GitHub
        </SecButton>
      </div>

      <p className="text">Touch grass. Farm Aura.</p>
      <p className="text">
        Instead of rotting in your dorm all day, get out and explore Cal Poly.
        Aura Farm is built by Mustangs for Mustangs, so every challenge you
        complete will allow you to discover new places on campus and meet other
        students. Farm Aura and climb the leaderboard while you explore SLO.
      </p>
    </>
  );
}
