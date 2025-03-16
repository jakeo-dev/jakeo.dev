import CommonHead from "@/components/CommonHead";
import Button from "@/components/Button";
import SecButton from "@/components/SecButton";
import ImageCarousel from "@/components/ImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faHammer,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

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

      <div className="sub1title flex items-center pb-0">
        <img
          src="https://pairckle.jakeo.dev/pairckle-icon.png"
          className="inline w-8 mr-2"
          alt="Pairckle logo"
        />
        <h2 className="inline">Pairckle</h2>
      </div>

      <p className="sub3title pb-0 mt-0">
        Easily rank your favorite things with pairwise comparisons.
      </p>

      <div className="postDatesDiv">
        <h2>
          <FontAwesomeIcon icon={faHammer} className="mr-1.5" aria-hidden />
          Made with Next.js
        </h2>
        <h2>
          <FontAwesomeIcon
            icon={faCalendarDay}
            className="mr-1.5"
            aria-hidden
          />
          Released January 2025
        </h2>
        <h2>
          <FontAwesomeIcon
            icon={faRotateRight}
            className="mr-1.5"
            aria-hidden
          />
          Updated March 2025
        </h2>
      </div>

      <div className="container postImgDiv mx-auto mt-6">
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
        Pairckle is a website that allows you to easily create a ranking with
        pairwise comparisons. The first version was released in January 2025,
        built using Next.js.
      </p>
      <p className="text">
        The website is similar to other sites, like tier list makers, that are
        used to rank different cultural elements. I found that tier lists were
        not definitive enough of a ranking, and it was difficult to compare one
        element to every other element that was already ranked, so using
        pairwise comparisons seemed to be the easiest and most accurate method
        to turn to. Pairckle shows two random elements from your input, and
        after picking which one you prefer a certain number of times, it creates
        the ultimate ranking.
      </p>
    </>
  );
}
