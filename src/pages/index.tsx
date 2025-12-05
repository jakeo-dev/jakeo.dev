import CommonHead from "@/components/CommonHead";
import BigProject from "@/components/projects/BigProject";
import Link from "next/link";
import TopTrack from "@/components/TopTrack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import localFont from "next/font/local";
const handwriting = localFont({
  src: "../fonts/Jakes_Handwriting_V5-Regular.ttf",
  display: "swap",
  variable: "--font-handwriting",
});

export default function Home() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev</title>
        <meta property="og:title" content="Hi, I'm Jake" />
        <meta
          property="og:description"
          content="I'm a Computer Science student at Cal Poly SLO who likes to build digital things."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* about me */}
      <h1 className="sub0title mt-0">
        Hi, I'm{" "}
        <span
          className={`${handwriting.className} text-[1.3rem] leading-0 md:text-[1.6rem]`}
        >
          Jake
        </span>
      </h1>

      <p className="text">
        I'm a Computer Science student at{" "}
        <a
          href="https://ceng.calpoly.edu/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          Cal Poly SLO
        </a>{" "}
        who likes to build digital things.
      </p>
      <p className="text">
        Right now, I mostly develop web apps using React, Next.js, and
        TypeScript. Almost everything I make is on{" "}
        <a
          href="https://github.com/jakeo-dev?tab=repositories&sort=stargazers"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          my GitHub
        </a>
        , and my most notable projects are featured here on this website.
      </p>
      <p className="text">
        My top song this month is <TopTrack />.
      </p>

      {/* projects */}
      <div>
        <div className="container mx-auto">
          <BigProject
            title="Everydle"
            desc="Every game of Wordle at the same time."
            bgColor="bg-gradient-to-br from-lime-500/50 to-lime-600/50"
            borderColor="hover:border-yellow-200"
            shadowColor="shadow-lime-500/30"
            href="/projects/everydle"
            images={[
              {
                src: "/images/everydle-ss-1.png",
                alt: "Screenshot of Everydle showing the game being played in classic mode",
              },
              {
                src: "/images/everydle-ss-2.png",
                alt: "Screenshot of Everydle showing the game being played in compact mode",
              },
            ]}
          />
        </div>

        <div className="container mx-auto">
          <BigProject
            title="Pairckle"
            desc="Rank your favorite things easily, accurately, and pairwisely."
            bgColor="bg-gradient-to-r from-orange-500/50 to-blue-500/50"
            borderColor="hover:border-orange-200"
            shadowColor="shadow-orange-500/30"
            href="/projects/pairckle"
            imagePosition="object-top"
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
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/projects"
          className="internal-link block text-lg no-underline md:text-xl"
        >
          <span>See all projects</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" aria-hidden />
        </Link>
      </div>
    </>
  );
}
