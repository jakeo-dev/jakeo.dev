import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import ImageCarousel from "@/components/ImageCarousel";
import ProjectCover from "@/components/projects/ProjectCover";

export default function WashWise() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>WashWise | Jake Orchanian</title>
        <meta property="og:title" content="WashWise | Jake Orchanian" />
        <meta
          property="og:description"
          content="WashWise is an app that lets you discover and reduce the impact of your showers."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://jakeo.dev/logos/j-logo-blue.png"
        />
      </CommonHead>

      <div className="section">
        <ProjectCover
          title="WashWise"
          desc="Discover and reduce the impact of your showers."
          createDate="September 2025"
          updateDate="September 2025"
          logoImg="https://washwise.jakeo.dev/favicon.png"
          logoBig
          toolsList={["Expo", "React Native", "TypeScript"]}
        />

        <div className="post-img relative container mx-auto h-72 w-full rounded-xl bg-gradient-to-br from-blue-500/50 to-blue-600/50 sm:h-96 md:h-[440px] md:rounded-3xl">
          <ImageCarousel
            images={[
              {
                src: "/images/washwise-ss2-1.jpeg",
                alt: 'Text saying "See your water usage over time" and a screenshot showing a timer and number of gallons of water used',
              },
              {
                src: "/images/washwise-ss2-2.jpeg",
                alt: 'Text saying "Reduce your environmental impact" and a screenshot showing a list of shower logs',
              },
              {
                src: "/images/washwise-ss2-3.jpeg",
                alt: 'Text saying "Log showers to understand your habits" and a screenshot showing a list of shower logs',
              },
              {
                src: "/images/washwise-ss2-4.jpeg",
                alt: 'Text saying "Discover how that water could have been used" and a screenshot showing various ways the shower water could have been used',
              },
            ]}
            imagePosition="object-top"
            className="absolute top-1/2 left-1/2 h-64 w-32 -translate-x-1/2 -translate-y-1/2 sm:h-80 sm:w-[30%] md:h-[390px] md:w-[28%]"
            imageClassName="shadow-md"
          />
        </div>

        <div className="my-6 flex flex-col gap-3 md:flex-row">
          <Button
            className="border-blue-500 bg-blue-500 shadow-blue-500/30 hover:border-blue-600 hover:bg-blue-600 active:border-blue-700 active:bg-blue-700"
            href="https://washwise.jakeo.dev/mobile"
          >
            Download app
          </Button>
          <SecButton href="https://github.com/jakeo-dev/washwise">
            View on GitHub
          </SecButton>
        </div>

        <p className="text">
          WashWise is an app that lets you discover and reduce your water usage
          by timing and tracking your showers.
        </p>
        <p className="text">
          I've taken too many showers where I lose track of time and end up
          keeping the water on for over 30 minutes. I needed an accessible way
          to keep track of the impact of my showers to stop myself from wasting
          so much water. WashWise allows you to see how much water you're using
          and keep track of your usage over time.
        </p>
      </div>
    </>
  );
}
