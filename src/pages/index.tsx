import CommonHead from "@/components/CommonHead";
import Project from "@/components/projects/Project";
import Post from "@/components/blog/Post";
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
          content="I'm an incoming computer science student at Cal Poly SLO who likes to build digital things."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* about me */}
      <h2 className="sub1title mt-0">
        Hi, I'm{" "}
        <span className={`${handwriting.className} text-[1.4rem] leading-0`}>
          Jake
        </span>
      </h2>

      <p className="text">
        I'm a computer science student at Cal Poly SLO who likes to build
        digital things.
      </p>
      <p className="text">
        Right now, I mostly develop React web apps with Next.js and TypeScript.
        Almost everything I make is on{" "}
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
      <div className="sub1title flex items-center md:items-end">
        <h2>Some of my projects</h2>
        <Link
          href="/projects"
          className="text internal-link ml-auto px-2 text-sm font-normal no-underline md:text-base"
        >
          <span>See all</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <Project
            name="Everydle"
            desc="Play every game of Wordle at the same time."
            logo="https://everydle.jakeo.dev/favicon.ico"
            showLogo
            type={0}
            colors="hover:border-lime-600"
            link="https://everydle.jakeo.dev"
          />

          <Project
            name="Plannter"
            desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo
            type={0}
            colors="hover:border-emerald-600"
            link="https://plannter.jakeo.dev"
          />
        </div>
      </div>

      {/* posts */}
      <div className="sub1title flex items-center md:items-end">
        <h2>Some of my posts</h2>
        <Link
          href="/blog"
          className="text internal-link ml-auto px-2 text-sm font-normal no-underline md:text-base"
        >
          <span>See all</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>

      <Post
        name="Calligraphr + FontForge: Layman's Overcomplicated Guide to Making a Good-Looking Font for Free"
        desc={`In December 2024, I designed a typeface based on my handwriting using both Calligraphr and FontForge. Calligraphr is a great service that lets you create your own font, but it's really only useful if you upgrade to the Pro version. So instead of spending...`}
        releaseDate="May 3, 2025"
        updateDate=""
        fadeDesc={true}
        img={require("../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/thumbnail.png")}
        imgAlt="Different letters in different fonts kerned at different amounts"
        showImg={false}
        href="/blog/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free"
      />

      <Post
        name="Dialing Letters Instead of Digits"
        desc={`In February 2023, I introduced the first iteration of Cifra, my website that generates as many vanity phone numbers that match an inputted phone number as fast as possible. Over the past year and a half, I've found different ways to improve the efficiency and...`}
        releaseDate="August 18, 2024"
        updateDate=""
        fadeDesc={true}
        img={require("../../public/images/dialing-letters-instead-of-digits/thumbnail.png")}
        imgAlt="Overlapping lists of random words and numbers"
        showImg={false}
        href="/blog/dialing-letters-instead-of-digits"
      />
    </>
  );
}
