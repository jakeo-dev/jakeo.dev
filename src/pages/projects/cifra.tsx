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
import Link from "next/link";

export default function Projects() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: About Cifra</title>
        <meta property="og:title" content="JakeO.dev: About Cifra" />
        <meta
          property="og:description"
          content="A more detailed description about Cifra"
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <div className="sub1title flex items-center pb-0">
        <img
          src="https://cifra.jakeo.dev/cifra-logo.png"
          className="inline w-8 mr-2"
          alt="Cifra logo"
        />
        <h2 className="inline">Cifra</h2>
      </div>

      <p className="sub3title pb-0 mt-0">
        Generate vanity numbers from your own phone number to make it
        unforgettable.
      </p>

      <div className="postDatesDiv">
        <h2>
          <FontAwesomeIcon icon={faCalendarDay} className="mr-1.5" />
          Released February 2023
        </h2>
        <h2>
          <FontAwesomeIcon icon={faRotateRight} className="mr-1.5" />
          Updated June 2024
        </h2>
        <h2>
          <FontAwesomeIcon icon={faHammer} className="mr-1.5" />
          Made with JavaScript/HTML/CSS
        </h2>
      </div>

      <div className="container postImgDiv mx-auto mt-6">
        <ImageCarousel
          images={["/images/cifra-ss-1.png", "/images/cifra-ss-2.png"]}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 my-6">
        <Button
          className="border-yellow-600 hover:border-yellow-700 active:border-yellow-800 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800"
          href="https://cifra.jakeo.dev"
        >
          Visit website
        </Button>
        <SecButton className="" href="https://github.com/jakeo-dev/cifra">
          View GitHub
        </SecButton>
      </div>

      <p className="text">
        Cifra is a website that lets you generate vanity phone numbers from an
        inputted phone number. Generated vanity numbers can be starred to look
        at later. The first version was released in February 2023, and it was
        later updated in January 2024 to use a much more efficient generation
        method.
      </p>
      <p className="text">
        In short, to generate all possible vanity phone numbers quickly, Cifra
        converts every word in a word list to a string of numbers corresponding
        to the digits on the typical telephone keypad, loops through them to
        check if there are any matches with the inputted phone number, replaces
        the matched digits with the corresponding word, and finally displays
        each vanity number. For a more in-depth explanation, read my blog post:{" "}
        <Link href="/blog/dialing-letters-instead-of-digits" className="link">
          Dialing Letter Instead of Digits
        </Link>
        .
      </p>
      <p className="text">
        The website was originally called "Word Phone Number Generator," but was
        changed to "Cifra" in July 2023. "Cifra" (pronounced SEE-fra) is a
        Spanish word that can be translated to "number," "figure," or "cipher."
      </p>
      <p className="text">
        The logo shows the word "Cifra" with the letters' corresponding
        telephone keypad digits in front of it.
      </p>
    </>
  );
}
