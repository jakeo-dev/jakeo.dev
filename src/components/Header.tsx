import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [color, setColor] = useState("#000000");
  const [imgVis, setImgVis] = useState("");
  const [svgVis, setSvgVis] = useState("hidden");

  return (
    <header className="flex items-center align-middle text-center my-16 md:my-24 -translate-x-4">
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
            className="w-32 md:w-36 object-contain hover:scale-110 hover:rotate-3 active:scale-100 active:rotate-0 transition-all cursor-pointer"
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
            className="w-32 md:w-36 object-contain hover:scale-110 hover:rotate-3 active:scale-100 active:rotate-0 transition-all cursor-pointer"
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
      <div className="ml-3">
        <Link
          href="/"
          className="text-4xl md:text-5xl font-bold max-w-min hover:text-gray-600 active:text-gray-500 transition-all mx-auto cursor-pointer"
        >
          JakeO.dev
        </Link>
        <p className="text-gray-600 text-left font-medium">
          bunny on the internet
        </p>
        <div className="border-t-[2.5px] border-dotted border-gray-300 my-2"></div>
        <div className="flex gap-3 text-gray-600 text-left">
          <Link
            href="/"
            className="text hover:text-sky-500 active:text-sky-600 m-0 transition-all"
          >
            <span>home</span>
          </Link>
          <Link
            href="/projects"
            className="text hover:text-sky-500 active:text-sky-600 m-0 transition-all"
          >
            <span>projects</span>
          </Link>
          <Link
            href="/blog"
            className="text hover:text-sky-500 active:text-sky-600 m-0 transition-all"
          >
            <span>posts</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
