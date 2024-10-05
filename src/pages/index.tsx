import CommonHead from "../components/CommonHead";
import Header from "../components/Header";
import Project from "../components/Project";
import Post from "@/components/Post";
import Button from "../components/Button";
import SecButton from "../components/SecButton";

export default function Home() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev</title>
        <meta property="og:title" content="JakeO.dev" />
        <meta property="og:description" content="bunny on the internet" />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* header */}
      <Header currentPage="home" />

      {/* about me */}
      <h2 className="sub1title mt-0">Welcome to my website!</h2>

      <p className="text">
        I mainly design websites or make other things using my knowledge in
        programming. I've built this website with Next.js.
      </p>
      <p className="text">
        The font I use often and am using right now is{" "}
        <a href="https://lexend.com" target="_blank" className="link">
          Lexend
        </a>
        . It's known for being easy to read, and it also just looks good.
      </p>
      <p className="text">
        Sometimes I also write blog posts about things that I find interesting.
      </p>

      {/* projects */}
      <h2 className="sub1title">Some of my projects</h2>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name="Plannter"
            desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
            releaseDate=""
            updateDate="September 2024"
            img={require("../../public/images/plannter-ss-1.png")}
            showImg={false}
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo={true}
          >
            <Button className="" href="https://plannter.jakeo.dev">
              Visit
            </Button>
            <SecButton
              className=""
              href="https://github.com/jakeo-dev/plannter"
            >
              GitHub
            </SecButton>
          </Project>

          <Project
            name="Cifra"
            desc="Generate vanity numbers from your own phone number to make it unforgettable."
            releaseDate=""
            updateDate="June 2024"
            img={require("../../public/images/cifra-ss-2.png")}
            showImg={false}
            logo="https://cifra.jakeo.dev/cifra-logo.png"
            showLogo={true}
          >
            <Button className="" href="https://cifra.jakeo.dev">
              Visit
            </Button>
            <SecButton className="" href="https://github.com/jakeo-dev/cifra">
              GitHub
            </SecButton>
          </Project>
        </div>

        {/* <Link
          href="/projects"
          className="flex justify-center items-center h-min text-xl border-2 hover:bg-gray-200 active:bg-gray-300 active:border-gray-300 transition-all rounded-full p-3.5 md:ml-4 mt-6 md:my-auto"
        >
          <p className="md:hidden">All projects</p>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 md:ml-0" />
        </Link> */}
      </div>

      {/* posts */}
      <h2 className="sub1title">Some of my posts</h2>

      <Post
        name="Dialing Letters Instead of Digits"
        desc="In February 2023, I unleashed the first iteration of Cifra, my website that generates and displays as many vanity phone numbers that match an inputted..."
        releaseDate="August 18, 2024"
        updateDate=""
        fadeDesc={true}
        img={require("../../public/images/dialing-letters-instead-of-digits/thumbnail.png")}
        showImg={false}
        href="/blog/dialing-letters-instead-of-digits"
      />

      <Post
        name='P("Congratulations! We are pleased to inform you...")'
        desc='"Congratulations" is the single greatest word to begin an email. For a graduating high school student, it&apos;s immensely more exciting. You deserve not only to be...'
        releaseDate="June 17, 2024"
        updateDate=""
        fadeDesc={true}
        img={require("../../public/images/p-of-congratulations-we-are-pleased-to-inform-you/thumbnail.png")}
        showImg={false}
        href="/blog/p-of-congratulations-we-are-pleased-to-inform-you"
      />
    </>
  );
}
