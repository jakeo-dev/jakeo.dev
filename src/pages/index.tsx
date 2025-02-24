import CommonHead from "@/components/CommonHead";
import Project from "@/components/Project";
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
            name="Pairckle"
            desc="Easily rank your favorite things with pairwise comparisons."
            releaseDate=""
            updateDate=""
            madeWith=""
            logo="https://pairckle.jakeo.dev/pairckle-icon.png"
            showLogo={true}
            type={0}
            colors="hover:border-orange-600"
            link="https://pairckle.jakeo.dev"
          />
        </div>
      </div>

      {/* posts */}
      <h2 className="sub1title">Some of my posts</h2>

      <Post
        name="Dialing Letters Instead of Digits"
        desc={`In February 2023, I unleashed the first iteration of Cifra, my website that generates and displays as many vanity phone numbers that match an inputted phone number as fast as possible. Over the past year and a half, I've found different ways to improve the efficiency...`}
        releaseDate="August 18, 2024"
        updateDate=""
        fadeDesc={true}
        img={require("../../public/images/dialing-letters-instead-of-digits/thumbnail.png")}
        imgAlt="Overlapping lists of random words and numbers"
        showImg={false}
        href="/blog/dialing-letters-instead-of-digits"
      />

      <Post
        name={`P("Congratulations! We Are Pleased to Inform You...")`}
        desc={`"Congratulations" is the single greatest word to begin an email. For a graduating high school student, it's immensely more exciting. You deserve not only to be accepted into a university, but also to be simply congratulated for your efforts. To relieve some anxiety...`}
        releaseDate="June 17, 2024"
        updateDate=""
        fadeDesc={true}
        img={require("../../public/images/p-of-congratulations-we-are-pleased-to-inform-you/thumbnail.png")}
        imgAlt="A warped fake college acceptance email"
        showImg={false}
        href="/blog/p-of-congratulations-we-are-pleased-to-inform-you"
      />
    </>
  );
}
