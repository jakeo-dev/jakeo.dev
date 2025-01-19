import CommonHead from "@/components/CommonHead";
import Post from "@/components/Post";

export default function Blog() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: Posts</title>
        <meta property="og:title" content="JakeO.dev: Posts" />
        <meta property="og:description" content="Blog posts from JakeO.dev" />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* posts */}
      <h2 className="sub1title mt-0">My posts</h2>

      <Post
        name="Dialing Letters Instead of Digits"
        desc="In February 2023, I unleashed the first iteration of Cifra, my website that generates and displays as many vanity phone numbers that match an inputted..."
        releaseDate="August 18, 2024"
        updateDate="August 18, 2024"
        fadeDesc={true}
        img={require("../../../public/images/dialing-letters-instead-of-digits/thumbnail.png")}
        showImg={false}
        href="/blog/dialing-letters-instead-of-digits"
      />

      <Post
        name='P("Congratulations! We Are Pleased to Inform You...")'
        desc='"Congratulations" is the single greatest word to begin an email. For a graduating high school student, it&apos;s immensely more exciting. You deserve not only to be...'
        releaseDate="June 17, 2024"
        updateDate="June 17, 2024"
        fadeDesc={true}
        img={require("../../../public/images/p-of-congratulations-we-are-pleased-to-inform-you/thumbnail.png")}
        showImg={false}
        href="/blog/p-of-congratulations-we-are-pleased-to-inform-you"
      />

      <Post
        name="The JakeO.dev Portfolio Wrapped 2023"
        desc="Wraps, recaps, and replays aren't just for music streaming services. I can look back on 2023 too, but with a focus on the thing I know best: my websites..."
        releaseDate="December 16, 2023"
        updateDate="April 14, 2024"
        fadeDesc={true}
        img={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png")}
        showImg={false}
        href="/blog/the-jakeo-dev-portfolio-wrapped-2023"
      />

      <Post
        name="AP World History: A History"
        desc="As more students enroll in Advanced Placement classes, the College Board is bound to make changes to the curriculums of their courses either to more accurately..."
        releaseDate="June 13, 2023"
        updateDate="December 6, 2023"
        fadeDesc={true}
        img={require("../../../public/images/ap-world-history-a-history/thumbnail.png")}
        showImg={false}
        href="/blog/ap-world-history-a-history"
      />
    </>
  );
}
