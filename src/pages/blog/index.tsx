import CommonHead from "../../components/CommonHead";
import Header from "../../components/Header";
import Post from "../../components/Post";
import Button from "../../components/Button";

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
          content="https://bunnies.jakeo.dev/../public/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* header */}
      <Header />

      {/* posts */}
      <h2 className="sub1title mt-0">My posts</h2>

      <Post
        name="The JakeO.dev Portfolio Wrapped 2023"
        desc="Wraps and recaps and replays aren't just for music streaming services. I can look back on 2023 too, but with a focus on the thing I know best: my websites..."
        releaseDate="December 16 2023"
        updateDate="December 16 2023"
        showReleaseDate={true}
        showUpdateDate={true}
        fadeDesc={true}
        img={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png")}
        showImg={false}
        href="/blog/the-jakeo-dev-portfolio-wrapped-2023"
      />

      <Post
        name="AP World History: A History"
        desc="As more students enroll in Advanced Placement classes, College Board is bound to make changes to the curriculums of their courses either to more accurately..."
        releaseDate="June 13 2023"
        updateDate="December 6 2023"
        showReleaseDate={true}
        showUpdateDate={true}
        fadeDesc={true}
        img={require("../../../public/images/ap-world-history-a-history/thumbnail.png")}
        showImg={false}
        href="/blog/ap-world-history-a-history"
      />
    </>
  );
}
