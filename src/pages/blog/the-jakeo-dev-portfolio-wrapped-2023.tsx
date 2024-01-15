import CommonHead from "../../components/CommonHead";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Blog2() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>The JakeO.dev Portfolio Wrapped 2023</title>
        <meta
          property="og:title"
          content="The JakeO.dev Portfolio Wrapped 2023"
        />
        <meta
          property="og:description"
          content="Wraps and recaps and replays aren't just for music streaming services. I can look back on 2023 too..."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:src"
          content="../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png"
        />
      </CommonHead>

      {/* header */}
      <Header />

      {/* post */}
      <h1 className="sub1title mt-0">The JakeO.dev Portfolio Wrapped 2023</h1>
      <h2 className="titleSubtext">
        <FontAwesomeIcon
          icon={faCalendarDay}
          className="mr-2"
          aria-label="Initially published"
        />
        December 16 2023
      </h2>
      <h2 className="titleSubtext">
        <FontAwesomeIcon
          icon={faRotateRight}
          className="mr-2"
          aria-label="Last edited"
        />
        December 16 2023
      </h2>

      <div className="postThumbImgDiv">
        <Image
          src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png")}
          alt="Screenshots from the websites of the JakeO.dev portfolio wrapped in a bunny"
          className="postThumbImg"
          placeholder="blur"
        />
      </div>

      <div className="flex">
        <div className="flex-1">
          <div className="mt-8">
            <p className="text">
              Wraps and recaps and replays aren't just for music streaming
              services. I can look back on 2023 too, but with a focus on the
              thing I know best: my websites. I've created, updated, and removed
              things from my websites many times since I began this portfolio
              with this website as Jorch.xyz in mid-2020. Here's some of the
              biggest changes to my websites made throughout the last 12 months.
            </p>
            <p className="text">
              All iterations of my websites can be seen on my{" "}
              <a
                href="https://github.com/jakeo-dev"
                target="_blank"
                className="link"
              >
                GitHub
              </a>
              .
            </p>

            {/* plannter */}
            <h3 className="sub1title" id="plannter">
              Plannter
            </h3>

            <p className="sub3title mt-0">January 2023</p>
            <p className="text">
              Introduced in late January 2023, Plannter lets students track and
              plan their courses, extracurricular activities, tests, and essays.
              It initially only tracked courses and activities, and it only had
              a calculation for the difficulty of each grade level.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-early-jan-2023.png")}
                alt="A screenshot of Plannter in early January 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="text">
              On release one week later, the design was made more intuitive,
              along with the now-removed grade level percent difficulty
              calculation and a tests section.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-jan-2023.png")}
                alt="A screenshot of Plannter in January 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">February 2023</p>
            <p className="text">
              In February, a dark mode, a graduation countdown, and the ability
              to add grades for individual courses were all added.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-feb-2023.png")}
                alt="A screenshot of Plannter in February 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">June and July 2023</p>
            <p className="text">
              In June and July, the ability to calculate unweighted and weighted
              GPA cumulatively and by grade level was added. The overall design
              was also slightly improved, with a better dark mode.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-jul-2023.png")}
                alt="A screenshot of Plannter in July 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">August 2023</p>
            <p className="text">
              A cumulative course difficulty calculation, an extracurricular
              strength calculation, and an essays section were all added in
              August, along with a few other minor features and improvements.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-aug-2023.png")}
                alt="A screenshot of Plannter in August 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            {/* cifra */}
            <h3 className="sub1title" id="cifra">
              Cifra
            </h3>

            <p className="sub3title mt-0">February 2023</p>
            <p className="text">
              Cifra was introduced in February 2023 as "Word Phone Number
              Generator", and it lets users generate vanity phone numbers from
              their own phone numbers which correspond to the letters and
              numbers on the telephone keypad of the E.161 standard.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/cifra-feb-2023.png")}
                alt="A screenshot of Cifra in February 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">March 2023</p>
            <p className="text">
              The ability to save your favorite numbers for later was added in
              March 2023.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/cifra-mar-2023.png")}
                alt="A screenshot of Cifra in March 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">July 2023</p>
            <p className="text">
              An official name was finally given to the website in July, along
              with an improved design to show more numbers at once. There were
              also many improvements to the generation, like checking if a
              letter combination has already been tried and preventing the same
              number from showing up twice.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/cifra-nov-2023.png")}
                alt="A screenshot of Cifra in July 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            {/* yearn */}
            <h3 className="sub1title" id="yearn">
              Yearn
            </h3>

            <p className="sub3title mt-0">January 2023</p>
            <p className="text">
              Introduced as Whim List in November 2022, it was changed simply to
              Yearn in January. Users can add gifts that they yearn for and
              attach links, prices, and other attributes to them.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/yearn-jan-2023.png")}
                alt="A screenshot of Yearn in January 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">February 2023</p>
            <p className="text">
              The design was slightly improved in February.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/yearn-feb-2023.png")}
                alt="A screenshot of Yearn in February 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">October and November 2023</p>
            <p className="text">
              Yearn's design was improved upon again in October. The ability to
              change the color of gift items and move them around within the
              list were both added in November.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/yearn-nov-2023.png")}
                alt="A screenshot of Yearn in November 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            {/* decorate a tree */}
            <h3 className="sub1title" id="decorate-a-tree">
              Decorate a Tree
            </h3>

            <p className="sub3title mt-0">January 2023</p>
            <p className="text">
              At the beginning of 2023, Decorate a Tree was styling its update
              from December of 2022, with many updated and new decor, and most
              notably a selector to pick a specific decoration item.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/tree-jan-2023.png")}
                alt="A screenshot of Decorate a Tree in January 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">December 2023</p>
            <p className="text">
              In December, the website was updated with new ornaments, presents,
              and toppers. More abstract designs replaced the literal
              Christmas-related objects in many ornament designs. Similar to the
              decor selector added the previous year, a tree and garland
              selector was added. The size of decor could now also be changed.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/tree-dec-2023.png")}
                alt="A screenshot of Decorate a Tree in Deceember 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>
            <div className="flex gap-x-4">
              <div className="postImgDiv mt-0">
                <Image
                  src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-yellow-old.png")}
                  alt="Old yellow ornament"
                  className="postImg max-w-[8rem]"
                  placeholder="blur"
                />
                <p className="subtext">Old yellow ornament</p>
              </div>
              <div className="postImgDiv mt-0">
                <Image
                  src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-yellow-new.png")}
                  alt="New yellow ornament"
                  className="postImg max-w-[8rem]"
                  placeholder="blur"
                />
                <p className="subtext">New yellow ornament</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="postImgDiv mt-0">
                <Image
                  src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-green-old.png")}
                  alt="Old green ornament"
                  className="postImg max-w-[8rem]"
                  placeholder="blur"
                />
                <p className="subtext">Old green ornament</p>
              </div>
              <div className="postImgDiv mt-0">
                <Image
                  src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-green-new.png")}
                  alt="New green ornament"
                  className="postImg max-w-[8rem]"
                  placeholder="blur"
                />
                <p className="subtext">New green ornament</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="postImgDiv mt-0">
                <Image
                  src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-cyan-old.png")}
                  alt="Old cyan ornament"
                  className="postImg max-w-[8rem]"
                  placeholder="blur"
                />
                <p className="subtext">Old cyan ornament</p>
              </div>
              <div className="postImgDiv mt-0">
                <Image
                  src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-cyan-new.png")}
                  alt="New cyan ornament"
                  className="postImg max-w-[8rem]"
                  placeholder="blur"
                />
                <p className="subtext">New cyan ornament</p>
              </div>
            </div>

            {/* jakeo.dev */}
            <h3 className="sub1title" id="jakeo-dev">
              JakeO.dev
            </h3>

            <p className="sub3title mt-0">January 2023</p>
            <p className="text">
              This design in January 2023 features more colorful social buttons,
              a solid blue-gray bunny (compared to the newer gradient one), a
              subtle background gradient, and some older projects like Emoticon
              Generator and Rick Roll Roulette.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/main-site-jan-2023.png")}
                alt="A screenshot of JakeO.dev in January 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">June 2023</p>
            <p className="text">
              This iteration most notably featured the first blog post on the
              website, "AP World History: A History," though incorrectly
              capitalized. It also reorganized the projects, putting only the
              three most recent ones in one row on the main page, and another
              page to view all of them. The gradient bunny made its debut here,
              along with an improved header including more rounded corners.
              There was also an easter egg that changed the description by
              clicking the dot in the website title.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/main-site-jun-2023.png")}
                alt="A screenshot of JakeO.dev in June 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">August and September 2023</p>
            <p className="text">
              In August and September, the website's lights were turned on with
              a new light theme. A new Featured Videos section was added. The
              header was majorly changed, with the title becoming a link to the
              home page, the bunny being able to change its color when clicked,
              and the social buttons being replaced with links to pages showing
              all Projects, Videos, and Posts. The social buttons were instead
              put in two places: next to the About Me section and in a footer.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/main-site-sep-2023.png")}
                alt="A screenshot of JakeO.dev in September 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>

            <p className="sub3title mt-0">October 2023</p>
            <p className="text">
              This iteration has been in effect since October, and the current
              website still resembles this design. Most of the sections were
              removed from their boxes, with the header being modified the most,
              no longer a persistent oval at the top of the screen. The social
              buttons were once again moved to be in their own section below the
              About Me.
            </p>
            <div className="postImgDiv">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/main-site-oct-2023.png")}
                alt="A screenshot of JakeO.dev in October 2023"
                className="postImg"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="text-left mt-16">
            <Link href="/blog" className="block text-xl link">
              Read more posts like this one
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:block flex-[0.3] sticky top-0 self-start">
          <div className="border-l-2 border-gray-300 pb-3 pl-8 ml-10 mt-16">
            <p className="sub2title mt-0">Sections</p>
            <a href="#plannter" className="text link block">
              Plannter
            </a>
            <a href="#cifra" className="text link block mt-5">
              Cifra
            </a>
            <a href="#yearn" className="text link block mt-5">
              Yearn
            </a>
            <a href="#decorate-a-tree" className="text link block mt-5">
              Decorate a Tree
            </a>
            <a href="#jakeo-dev" className="text link block mt-5">
              JakeO.dev
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
