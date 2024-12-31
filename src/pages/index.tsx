import CommonHead from "../components/CommonHead";
import Header from "../components/Header";
import Project from "../components/Project";
import Post from "@/components/Post";

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

      {/* header */}
      <Header currentPage="home" />

      {/* about me */}
      <h2 className="sub1title mt-0">Welcome to my website!</h2>

      <p className="text">
        I make things using my knowledge in programming. Most of my projects are
        featured on this website, which I've built using Next.js. Sometimes I
        also write blog posts about things that I find interesting.
      </p>

      {/* projects */}
      <h2 className="sub1title">Some of my projects</h2>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name="Plannter"
            desc="Plan courses, keep track of extracurriculars, prepare for college applications, and more."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo="https://plannter.jakeo.dev/plannter-icon-dark.png"
            showLogo={true}
            type={0}
            colors="hover:border-emerald-600"
            link="https://plannter.jakeo.dev"
          />

          <Project
            name="Cifra"
            desc="Generate vanity numbers from your own phone number to make it unforgettable."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo="https://cifra.jakeo.dev/cifra-logo.png"
            showLogo={true}
            type={0}
            colors="hover:border-yellow-600"
            link="https://cifra.jakeo.dev"
          />
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
        name='P("Congratulations! We Are Pleased to Inform You...")'
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
