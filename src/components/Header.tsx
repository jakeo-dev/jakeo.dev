import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal";

export default function Header(props: { currentPage: string }) {
  const [color, setColor] = useState("#000000");
  const [imgVis, setImgVis] = useState("");
  const [svgVis, setSvgVis] = useState("hidden");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* discord modal */}
      <Modal className="" open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center text-[#5865f2] text-3xl">
          <FontAwesomeIcon
            icon={faDiscord}
            aria-label="Discord"
            className="mr-2"
          />
          <h1>@jakeybakers</h1>
        </div>
      </Modal>

      {/* header */}
      <header className="md:flex items-center align-middle text-center my-16 -translate-x-2 md:-translate-x-4">
        <div className="flex items-center">
          <div>
            <button
              className={imgVis}
              onClick={() => {
                setColor(
                  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                    Math.random() * 256
                  )}, ${Math.floor(Math.random() * 256)})`
                );
                setImgVis("hidden");
                setSvgVis("");
              }}
            >
              <img
                src="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
                alt="Solid gradient blue gray bunny"
                className="w-16 md:w-[4.5rem] object-contain hover:scale-110 hover:rotate-3 active:scale-100 active:rotate-0 transition cursor-pointer"
              />
            </button>
            <button
              className={svgVis}
              onClick={() =>
                setColor(
                  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                    Math.random() * 256
                  )}, ${Math.floor(Math.random() * 256)})`
                )
              }
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet"
                className="w-16 md:w-[4.5rem] object-contain hover:scale-110 hover:rotate-3 active:scale-100 active:rotate-0 transition cursor-pointer"
              >
                <g
                  transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                  style={{ fill: color }}
                  stroke="none"
                >
                  <path d="M1253 2909 c-71 -21 -135 -137 -153 -279 -20 -159 -3 -373 39 -500 20 -60 19 -70 -8 -70 -34 0 -118 -51 -174 -105 -66 -65 -108 -123 -158 -223 -21 -40 -62 -99 -91 -131 l-54 -58 -95 -5 c-109 -7 -129 -13 -129 -41 0 -19 4 -20 101 -14 l100 6 -3 -42 -3 -42 -103 -21 c-105 -21 -133 -37 -108 -62 11 -11 23 -11 72 1 32 9 77 18 100 22 40 6 41 6 53 -34 6 -22 24 -54 38 -72 28 -33 133 -89 167 -89 17 0 18 -6 12 -62 -23 -231 -28 -196 68 -462 45 -122 47 -190 11 -296 -14 -40 -22 -83 -19 -96 12 -46 150 -72 212 -40 34 18 82 69 112 119 12 21 25 36 27 33 3 -3 0 -42 -7 -88 -13 -97 -5 -133 37 -149 38 -15 122 -5 172 20 42 22 74 70 101 156 22 70 58 131 94 163 l36 32 35 -38 35 -37 -33 -25 c-141 -108 -166 -190 -70 -232 44 -20 53 -20 148 -8 173 22 318 72 392 135 46 39 95 139 121 243 l17 70 56 6 c117 12 203 70 246 166 20 45 25 72 26 142 0 74 -3 94 -27 142 -31 64 -81 103 -165 131 -62 20 -148 16 -186 -9 -36 -24 -46 -20 -89 36 -80 103 -292 241 -392 255 -39 5 -39 5 -35 46 4 49 -13 132 -44 209 l-23 58 64 31 c97 46 184 109 271 198 241 242 330 458 254 613 -74 154 -294 104 -517 -117 -104 -103 -231 -279 -313 -435 -5 -8 -15 -16 -24 -18 -14 -3 -13 9 8 85 71 260 56 603 -32 721 -44 58 -105 81 -170 61z" />
                </g>
              </svg>
            </button>
          </div>
          <div className="text-left ml-2.5">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold max-w-min hover:text-gray-600 active:text-gray-500 transition mx-auto cursor-pointer"
            >
              JakeO.dev
            </Link>

            {/* socials */}
            <div className="flex gap-3 mt-1.5 ml-0.5">
              <a
                href="mailto:hi@jakeo.dev"
                target="_blank"
                className="hover:text-blue-500 transition-all flex text-xl text-gray-500 hover:scale-110 active:scale-100"
              >
                <FontAwesomeIcon icon={faEnvelope} aria-label="Email" />
              </a>
              <a
                href="https://github.com/jakeo-dev"
                target="_blank"
                className="hover:text-[#333333] transition-all flex text-xl text-gray-500 hover:scale-110 active:scale-100"
              >
                <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
              </a>
              <button
                onClick={() => setOpen(true)}
                className="hover:text-[#5865f2] transition-all flex text-xl text-gray-500 hover:scale-110 active:scale-100"
              >
                <FontAwesomeIcon icon={faDiscord} aria-label="Discord" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-gray-600 text-left border-t-2 border-dotted border-gray-300 pt-3 mt-3 ml-auto md:border-0 md:pt-0 md:mt-0">
          <Link
            href="/"
            className={`${
              props.currentPage == "home"
                ? "text-gray-100 bg-sky-600 hover:bg-sky-500 active:bg-sky-600"
                : "hover:text-sky-600 active:text-sky-500"
            } text rounded-md px-2 py-1 transition mr-1.5`}
          >
            <span>home</span>
          </Link>
          <Link
            href="/projects"
            className={`${
              props.currentPage == "projects"
                ? "text-gray-100 bg-sky-600 hover:bg-sky-500 active:bg-sky-600"
                : "hover:text-sky-600 active:text-sky-500"
            } text rounded-md px-2 py-1 transition mr-1.5`}
          >
            <span>projects</span>
          </Link>
          <Link
            href="/blog"
            className={`${
              props.currentPage == "posts"
                ? "text-gray-100 bg-sky-600 hover:bg-sky-500 active:bg-sky-600"
                : "hover:text-sky-600 active:text-sky-500"
            } text rounded-md px-2 py-1 transition mr-1.5`}
          >
            <span>posts</span>
          </Link>
        </div>
      </header>
    </>
  );
}
