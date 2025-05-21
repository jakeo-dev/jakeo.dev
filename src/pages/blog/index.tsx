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
        name="Calligraphr + FontForge: Layman's Overcomplicated Guide to Making a Good-Looking Font for Free"
        desc={`In December 2024, I designed a typeface based on my handwriting using both Calligraphr and FontForge. Calligraphr is a great service that lets you create your own font, but it's really only useful if you upgrade to the Pro version. So instead of spending...`}
        releaseDate="May 3, 2025"
        fadeDesc={true}
        img={require("../../../public/images/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free/thumbnail.png")}
        imgAlt="Different letters in different fonts kerned at different amounts"
        showImg={false}
        href="/blog/calligraphr-fontforge-laymans-overcomplicated-guide-to-making-a-good-looking-font-for-free"
      />

      <Post
        name="Dialing Letters Instead of Digits"
        desc={`In February 2023, I introduced the first iteration of Cifra, my website that generates as many vanity phone numbers that match an inputted phone number as fast as possible. Over the past year and a half, I've found different ways to improve the efficiency and...`}
        releaseDate="August 18, 2024"
        fadeDesc={true}
        img={require("../../../public/images/dialing-letters-instead-of-digits/thumbnail.png")}
        imgAlt="Overlapping lists of random words and numbers"
        showImg={false}
        href="/blog/dialing-letters-instead-of-digits"
      />

      <Post
        name={`P("Congratulations! We Are Pleased to Inform You...")`}
        desc={`"Congratulations" is the greatest word to begin an email, especially one coming from a college during decision season. The letter is more than an acceptance, it's also a recognition of your efforts. To relieve some anxiety about the future, I'll offer a different...`}
        releaseDate="June 17, 2024"
        fadeDesc={true}
        img={require("../../../public/images/p-of-congratulations-we-are-pleased-to-inform-you/thumbnail.png")}
        imgAlt="A warped fake college acceptance email"
        showImg={false}
        href="/blog/p-of-congratulations-we-are-pleased-to-inform-you"
      />

      <Post
        name="The JakeO.dev Portfolio Wrapped 2023"
        desc={`Wraps, recaps, and replays aren't just for music streaming services. I can look back on 2023 too, but instead with a focus on my websites. Since I began this portfolio with Jorch.xyz as my domain in mid-2020, I've constantly added, updated, and removed various...`}
        releaseDate="December 16, 2023"
        fadeDesc={true}
        img={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png")}
        imgAlt="Screenshots from the websites of the JakeO.dev portfolio encapsulated in a bunny"
        showImg={false}
        href="/blog/the-jakeo-dev-portfolio-wrapped-2023"
      />

      <Post
        name="AP World History: A History"
        desc={`As more students enroll in Advanced Placement classes, the College Board is bound to make changes to the curriculums of their courses either to more accurately represent college-level classes or to make them easier for students. The outline and exam for the AP...`}
        releaseDate="June 13, 2023"
        fadeDesc={true}
        img={require("../../../public/images/ap-world-history-a-history/thumbnail.png")}
        imgAlt="Crystal Bay at Incline Village in Nevada taken in April 2022"
        showImg={false}
        href="/blog/ap-world-history-a-history"
      />
    </>
  );
}
