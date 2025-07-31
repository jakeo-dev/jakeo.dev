import CommonHead from "@/components/CommonHead";
import Project from "@/components/projects/Project";
import TopTrack from "@/components/TopTrack";
import Paper from "@/components/Paper";
import Keychain from "@/components/Keychain";

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

      <div className="absolute top-6 left-0 md:left-12 xl:left-72">
        <Keychain
          imageClassName="max-w-8"
          imageLink="mailto:hi@jakeo.dev"
          imageSrc="https://www.iconarchive.com/download/i112277/fa-team/fontawesome/FontAwesome-Envelope.1024.png"
        />
      </div>
      <div className="absolute top-12 left-14 md:left-30 xl:left-90">
        <Keychain
          imageClassName="max-w-8"
          chainLength="short"
          imageLink="https://github.com/jakeo-dev"
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        />
      </div>
      <div className="absolute top-9 left-26 md:left-48 xl:left-108">
        <Keychain
          imageClassName="max-w-8"
          imageLink="https://ceng.calpoly.edu/"
          imageSrc="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-2-1.png"
        />
      </div>

      {/* about me */}
      <Paper
        paperClassName="sub1title mt-0 text-center"
        className="mx-auto w-fit"
      >
        <h1 className={`${handwriting.className} text-[2.5rem]`}>
          Hi, I'm Jake
        </h1>
      </Paper>

      <div className="absolute top-12 right-30 md:right-48 xl:right-110">
        <Keychain imageSrc="https://bunnies.jakeo.dev/images/sunny-bunny.png" />
      </div>
      <div className="absolute top-8 right-16 md:right-30 xl:right-90">
        <Keychain
          imageLink="https://ceng.calpoly.edu/"
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cal_Poly_Mustangs_logo.svg/1200px-Cal_Poly_Mustangs_logo.svg.png"
        />
      </div>
      <div className="absolute top-10 right-0 md:right-10 xl:right-70">
        <Keychain imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207" />
      </div>

      <div className="block items-center gap-4 md:flex md:gap-6">
        <Paper speed="slow">
          <p className="text">
            I'm an incoming computer science student at Cal Poly SLO who likes
            to build digital things. Right now, I mostly develop React web apps
            with Next.js and TypeScript. Almost everything I make is on my
            GitHub, and my most notable projects are featured here on this
            website.
          </p>
        </Paper>
        <Paper className="mt-4 h-min w-full md:m-0">
          <p className="text">
            My top song this month is <TopTrack />.
          </p>
        </Paper>
      </div>

      {/* projects */}
      <Paper paperClassName="sub1title text-center" className="mx-auto w-fit">
        <h1 className={`${handwriting.className} text-[2.5rem]`}>
          Some of my projects
        </h1>
      </Paper>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <Project
            name="Plannter"
            desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo
            type={0}
            colors="hover:border-emerald-600"
            link="https://plannter.jakeo.dev"
            pinColor={4}
          />

          <Project
            name="Everydle"
            desc="Play every game of Wordle at the same time."
            logo="https://everydle.jakeo.dev/favicon.ico"
            showLogo
            type={0}
            colors="hover:border-lime-600"
            link="https://everydle.jakeo.dev"
            pinColor={3}
          />
        </div>
      </div>
    </>
  );
}
