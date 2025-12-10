import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCover from "@/components/projects/ProjectCover";

export default function Pairckle() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO: About Pairckle</title>
        <meta property="og:title" content="JakeO: About Pairckle" />
        <meta
          property="og:description"
          content="Pairckle is a website that makes ranking easier by using pairwise comparisons."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="Pairckle"
        desc="Rank your favorite things easily, accurately, and pairwisely."
        createDate="January 2025"
        updateDate="August 2025"
        logoImg="https://pairckle.jakeo.dev/pairckle-icon.png"
        toolsList={["Next.js", "React", "TypeScript"]}
      />

      <div className="post-img relative container mx-auto h-56 w-full bg-gradient-to-r from-orange-500/50 to-blue-500/50 sm:h-96 md:h-[460px]">
        <ImageCarousel
          images={[
            {
              src: "/images/pairckle-ss-1.png",
              alt: 'Screenshot of Pairckle showing two options to choose from: "Hamlet III" and "Just Like That"',
            },
            {
              src: "/images/pairckle-ss-2.png",
              alt: 'Screenshot of Pairckle showing three saved rankings, titled "Favorite unreleased songs," "Top works from Leo," and "Best clouds"',
            },
          ]}
          imagePosition="object-top"
          className="absolute top-1/2 left-1/2 h-48 w-[90%] -translate-x-1/2 -translate-y-1/2 sm:h-80 md:h-[380px]"
          imageClassName="shadow-md"
        />
      </div>

      <div className="my-6 flex flex-col gap-3 md:flex-row">
        <Button
          className="border-orange-500 bg-orange-500 shadow-orange-500/30 hover:border-orange-600 hover:bg-orange-600 active:border-orange-700 active:bg-orange-700"
          href="https://pairckle.jakeo.dev"
        >
          Visit website
        </Button>
        <SecButton href="https://github.com/jakeo-dev/pairckle">
          View GitHub
        </SecButton>
      </div>

      <p className="text">
        Pairckle is a website that makes ranking easier by using pairwise
        comparisons. The use of pairwise comparisons instead of tier lists
        allows for a much more definitive and accurate final ranking, with a
        clear winner, loser, and everything else in between.
      </p>
      <p className="text">
        If you're unsure about what to rank, Pairckle has fifty starter sets,
        with categories ranging from food to sports to technology and more.
        Choose between a quicker session with Hurry mode or a more accurate
        ranking with Concentrate mode.
      </p>
      <p className="text">
        After you've finished comparing, your final ranking is saved. Add a
        title and share it, or re-rank the set if you disagree with the order.
      </p>
    </>
  );
}
