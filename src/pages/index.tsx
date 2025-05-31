import CommonHead from "@/components/CommonHead";
import Project from "@/components/Project";
import Post from "@/components/Post";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev</title>
        <meta property="og:title" content="JakeO.dev" />
        <meta
          property="og:description"
          content="I make things using my knowledge in programming"
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* about me */}
      <h2 className="sub1title mt-0">Welcome to my website!</h2>

      <p className="text">
        I make things using my knowledge in programming. (Almost) everything I
        create is available on my GitHub, but my most notable projects are
        featured on this website, which I've built using Next.js. Sometimes I
        also write blog posts about things that I find interesting.
      </p>

      {/* projects */}
      <div className="sub1title flex items-center md:items-end">
        <h2>Some of my projects</h2>
        <Link
          href="/projects"
          className="text internalLink text-sm md:text-base px-2 ml-auto"
        >
          <span>See all</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <Project
            name="Plannter"
            desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo={true}
            type={0}
            colors="hover:border-emerald-600"
            link="https://plannter.jakeo.dev"
          />

          <Project
            name="Everydle"
            desc="Play every game of Wordle at the same time."
            logo="https://everydle.jakeo.dev/favicon.ico"
            showLogo={true}
            type={0}
            colors="hover:border-lime-600"
            link="https://everydle.jakeo.dev"
          />
        </div>
      </div>

      {/* posts */}
      <div className="sub1title flex items-center md:items-end">
        <h2>Some of my posts</h2>
        <Link
          href="/blog"
          className="text internalLink text-sm md:text-base px-2 ml-auto"
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
