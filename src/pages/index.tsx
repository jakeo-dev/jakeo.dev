import CommonHead from "@/components/CommonHead";
import TopTrack from "@/components/TopTrack";
import Image from "next/image";

import localFont from "next/font/local";
import Link from "next/link";
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
          className={`${handwriting.className} text-[1.55rem] leading-0 font-bold md:text-[1.95rem]`}
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
        I've mostly been developing web apps using React, Next.js, and
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

      {/* pairckle */}
      <div className="mt-14 mb-3 flex gap-3 md:mb-0 md:gap-6">
        <Image
          src={require("/public/images/pairckle-ss-small.png")}
          alt="A Pairckle ranking of the best types of fries"
          className="fade-edges h-min w-7/12 rounded-xl md:w-5/12"
        />
        <div>
          <h2 className="sub1title mt-0">Pairckle</h2>
          <p className="text">
            Rank your favorite things easily, accurately, and pairwisely with{" "}
            <Link href="/projects/pairckle" className="internal-link">
              Pairckle
            </Link>
            .
          </p>
          <p className="text xs:block hidden">
            Instead of dragging and dropping and thinking about different tiers,
            just answer the question: Curly fries or waffle fries? SpongeBob or
            Patrick? Help or Abbey Road?
          </p>
          <p className="text xs:block hidden">
            Pairckle uses pairwise comparisons for a more accurate ranking, with
            a clear winner, loser, and everything in between.
          </p>
        </div>
      </div>
      <p className="text xs:hidden">
        Instead of dragging and dropping and thinking about different tiers,
        just answer the question: Curly fries or waffle fries? SpongeBob or
        Patrick? Help or Abbey Road?
      </p>
      <p className="text xs:hidden">
        Pairckle uses pairwise comparisons for a more accurate ranking, with a
        clear winner, loser, and everything in between.
      </p>

      {/* everydle */}
      <div className="mt-14 flex gap-3 md:mt-10 md:gap-6">
        {/* smaller top margin on bigger screen because it makes more sense visually */}
        <div>
          <h2 className="sub1title mt-0 text-right">Everydle</h2>
          <p className="text text-right">
            When Dordle, Quordle, Octordle, Sedecordle, Duotrigordle, and
            Sexaginta-quattordle aren't enough, there's{" "}
            <Link href="/projects/everydle" className="internal-link">
              Everydle
            </Link>
            .
          </p>
          <p className="text 2xs:block hidden text-right">
            No longer do you need to spend five minutes solving the daily
            Wordle; just play all two thousand of them at once in one extremely
            long sitting, and never worry about missing a day again.
          </p>
          <p className="text xs:block hidden text-right">
            How many games can you solve before getting bored and giving up?
          </p>
          <p className="text xs:block hidden text-right">
            My high score is 575.
          </p>
        </div>
        <Image
          src={require("/public/images/everydle-ss-small.png")}
          alt="A single game of Wordle inside Everydle being solved"
          className="fade-edges-tall h-min w-1/3 rounded-xl md:w-1/3"
        />
      </div>
      <p className="text 2xs:hidden text-right">
        No longer do you need to spend five minutes solving the daily Wordle;
        just play all 2,280 of them at once in one extremely long sitting, and
        never worry about missing a day again.
      </p>
      <p className="text xs:hidden text-right">
        How many games can you solve before getting bored and giving up?
      </p>
      <p className="text xs:hidden text-right">My high score is 575.</p>

      <Link
        href="/projects"
        className="group/link mt-14 flex cursor-pointer items-center justify-center gap-1"
      >
        <span className="internal-link hidden text-xl no-underline md:inline">
          See more of my projects
        </span>
        <span className="internal-link text-lg no-underline md:hidden">
          See all projects
        </span>
        <div className="group/img relative">
          <Image
            src={require("/public/images/long-squiggly-arrow.png")}
            alt="A long squiggly arrow"
            className="invisible absolute h-8 w-min transition-all duration-300 group-hover/img:invisible group-hover/img:opacity-0 group-hover/link:invisible group-hover/link:opacity-0 md:visible md:h-10"
          />
          <Image
            src={require("/public/images/long-squiggly-arrow-blue.png")}
            alt="A long blue squiggly arrow"
            className="visible h-8 w-min opacity-100 transition-all duration-300 group-hover/img:visible group-hover/img:opacity-100 group-hover/link:visible group-hover/link:opacity-100 md:invisible md:h-10 md:opacity-0"
          />
        </div>
      </Link>

      {/* projects */}
      {/* <h1 className="sub0title">Some of my projects</h1>

      <p className="text">
        When Dordle, Quordle, Octordle, Sedecordle, Duotrigordle, and
        Sexaginta-quattordle aren't enough, there's{" "}
        <Link href="/projects/everydle" className="internal-link">
          Everydle
        </Link>
        . Play every single game of Wordle at the same time.
      </p>
      <p className="text">
        Rank your favorite things easily, accurately, and pairwisely with{" "}
        <Link href="/projects/pairckle" className="internal-link">
          Pairckle
        </Link>
        . Use pairwise comparisons for a more accurate ranking, with a clear
        winner, loser, and everything in between.
      </p> 

      {/* more */}
      {/* <h1 className="sub0title">What else is here?</h1>
      <p className="text">
        You can see{" "}
        <Link href="/projects" className="internal-link">
          all of my projects
        </Link>
        ,{" "}
        <Link href="/blog" className="internal-link">
          my blog posts
        </Link>
        , or maybe you want to look at{" "}
        <a
          href="https://github.com/jakeo-dev/jakeo.dev"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          the source code for this website
        </a>
        ?
      </p> */}
    </>
  );
}
