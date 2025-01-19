import CommonHead from "../../components/CommonHead";
import SecButton from "../../components/SecButton";
import Image from "next/image";
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
        <title>JakeO.dev: About this website</title>
        <meta property="og:title" content="JakeO.dev: About this website" />
        <meta
          property="og:description"
          content="A more detailed description about this website"
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      <div className="sub1title flex items-center pb-0">
        <img
          src="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
          className="inline w-8 mr-2"
          alt="JakeO.dev logo"
        />
        <h2 className="inline">JakeO.dev</h2>
      </div>

      <p className="sub3title pb-0 mt-0">
        You're already here — check out all of my projects and blog posts.
      </p>

      <div className="postDatesDiv">
        <h2>
          <FontAwesomeIcon icon={faCalendarDay} className="mr-1.5" />
          Created September 2020
        </h2>
        <h2>
          <FontAwesomeIcon icon={faRotateRight} className="mr-1.5" />
          Updated January 2025
        </h2>
        <h2>
          <FontAwesomeIcon icon={faHammer} className="mr-1.5" />
          Made with Next.js
        </h2>
      </div>

      <div className="postImgDiv mt-6">
        <Image
          src={require("../../../public/images/main-ss-1.png")}
          alt="Screenshot of JakeO.dev"
          className="postImg"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 my-6">
        <SecButton
          className="py-1.5"
          href="https://github.com/jakeo-dev/jakeo.dev"
        >
          View GitHub
        </SecButton>
      </div>

      <p className="text">Welcome, you're already here.</p>
      <p className="text">
        JakeO.dev is my main website which showcases all of my various websites,
        apps, social media profiles, and blog posts.
      </p>
      <p className="text">
        I used Google Sites to build the first version of this website in
        September 2020, but eventually switched to HTML/CSS/JavaScript in May
        2021 where I continued to improve the design add my new projects. I
        pushed new design changes to the website every few months, only landing
        on the current design in October 2023. I started using Tailwind CSS in
        September 2022, and then rewrote everything with Next.js in January
        2024.
      </p>
      <p className="text">
        I first bought the domain Jorch.xyz in September 2020, but I switched to
        the current domain, JakeO.dev, in December 2022.
      </p>
      <p className="text">
        I started using the Android bunny emoji as my "logo" since the first
        version on Google Sites. At first, it was just the emoji, but sometime
        in 2021 I colored it light-blue. I later removed all the bunny's
        features and just kept the silhouette with a light-blue gradient.
      </p>
      <p className="text">
        <a href="https://lexend.com" target="_blank" className="link">
          Lexend Deca
        </a>{" "}
        is the font I use the most throughout this website and my other
        projects. I started using it because it isn't very widely used, and
        according to its designers, it improves reading speed and accuracy. I've
        also created a font based on my own handwriting which I use for this
        website's header title.
      </p>
    </>
  );
}
