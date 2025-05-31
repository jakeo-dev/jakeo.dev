import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCover from "@/components/ProjectCover";

export default function Pairckle() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: About Pairckle</title>
        <meta property="og:title" content="JakeO.dev: About Pairckle" />
        <meta
          property="og:description"
          content="A more detailed description about Pairckle"
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <ProjectCover
        title="Pairckle"
        desc="Easily rank your favorite things with pairwise comparisons."
        createDate="January 2025"
        updateDate="March 2025"
        logoImg="https://pairckle.jakeo.dev/pairckle-icon.png"
        toolsList={["Next.js", "TypeScript", "Tailwind"]}
      />

      <div className="container post-img-div mx-auto mt-6">
        <ImageCarousel
          images={["/images/pairckle-ss-1.png", "/images/pairckle-ss-2.png"]}
          imagePosition="object-top"
          alts={[
            'Screenshot of Pairckle showing two options to choose from: "Hamlet III" and "Just Like That"',
            'Screenshot of Pairckle showing three saved rankings, titled "Favorite unreleased songs," "Top works from Leo," and "Best clouds"',
          ]}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 my-6">
        <Button
          className="border-orange-600 hover:border-orange-700 active:border-orange-800 bg-orange-600 hover:bg-orange-700 active:bg-orange-800"
          href="https://pairckle.jakeo.dev"
        >
          Visit website
        </Button>
        <SecButton className="" href="https://github.com/jakeo-dev/pairckle">
          View GitHub
        </SecButton>
      </div>

      <p className="text">
        Pairckle is a website that allows you to create a ranking with simple
        pairwise comparisons. The first version was released in January 2025,
        built using Next.js.
      </p>
      <p className="text">
        The website is similar to other sites, like tier list makers, that are
        used to rank different cultural elements. I don't think tier lists are
        definitive enough of a ranking, and it can be difficult to compare one
        element to every other element that was already ranked. Using pairwise
        comparisons seems much easier and more accurate, since everything is
        being compared to everything else. Pairckle shows two random elements
        from your input, and after picking which one you prefer a certain number
        of times, it creates your ultimate ranking.
      </p>
    </>
  );
}
