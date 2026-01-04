import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

import localFont from "next/font/local";
const handwriting = localFont({
  src: "../fonts/Jakes_Handwriting_V5-Regular.ttf",
  display: "swap",
  variable: "--font-handwriting",
});

export default function Header() {
  const { pathname } = useRouter();

  const localParts = [
    "ih",
    "olleh",
    //"ekaj",
    "em",
    "ynnub",
    "mi",
    "xobni",
    "toor",
    //"ved",
    "tini",
    //"timmoc",
    //"emoh",
    //"yolped",
    "srekabyekaj",
    //"sc",
    //"bew",
    //"tenretni",
    //"stac",
    //"yloplac",
    //"diordna",
    //"dnomallid.rd",
    "10010110_00010110",
  ];
  const [currentLocalPart, setCurrentLocalPart] = useState("ih");
  const domain = "ved.oekaj@";
  const [email, setEmail] = useState("Error loading email");

  function newRandomEmail() {
    const oldLocalPart = currentLocalPart;
    localParts.splice(localParts.indexOf(oldLocalPart), 1);

    const newLocalPart =
      localParts[Math.floor(Math.random() * localParts.length)];
    setCurrentLocalPart(newLocalPart);
    setEmail((domain + newLocalPart).split("").reverse().join(""));
    /* navigator.clipboard.writeText(
      (domain + newLocalPart)
        .split("")
        .reverse()
        .join(""),
    ); */

    localParts.push(oldLocalPart);
  }

  const [imgVis, setImgVis] = useState("");
  const [imgSrc, setImgSrc] = useState("solid-gradient-blue-gray-bunny");

  const [color, setColor] = useState("#79716b");
  const [svgVis, setSvgVis] = useState("hidden");

  const [discordModalOpen, setDiscordModalOpen] = useState(false);

  const discordModalRef = useRef<HTMLDivElement | null>(null);
  const discordModalBtnRef = useRef<HTMLButtonElement | null>(null);

  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const emailModalRef = useRef<HTMLDivElement | null>(null);
  const emailModalBtnRef = useRef<HTMLButtonElement | null>(null);

  function handleOutsideModalClick(event: MouseEvent) {
    if (
      discordModalRef.current &&
      discordModalBtnRef.current &&
      !discordModalRef.current.contains(event.target as Element) &&
      !discordModalBtnRef.current.contains(event.target as Element)
    )
      setDiscordModalOpen(false);
    if (
      emailModalRef.current &&
      emailModalBtnRef.current &&
      !emailModalRef.current.contains(event.target as Element) &&
      !emailModalBtnRef.current.contains(event.target as Element)
    )
      setEmailModalOpen(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideModalClick);
    return () => document.removeEventListener("click", handleOutsideModalClick);
  }, []);

  const currentDate = new Date();
  const currentMonth: number = currentDate.getMonth();
  const currentDay: number = currentDate.getDate();

  const stPatricksDayBunnies = ["leprechaun-bunny", "leprechaun-bunny"];

  const earthDayBunnies = ["earth-bunny", "solid-earth-bunny"];

  const americaBunnies = ["american-bunny", "solid-us-flag-bunny"];

  const halloweenBunnies = [
    "pumpkin-head-bunny",
    "solid-gradient-orange-black-bunny",
    "skeleton-bunny",
    "witch-bunny",
    "bat-bunny",
  ];

  const thanksgivingBunnies = [
    "pilgrim-bunny",
    "cornucopia-of-bunnies",
    "solid-autumn-leaves-bunny",
  ];

  const christmasBunnies = [
    "santa-bunny",
    "solid-stripes-christmas-bunny",
    "snowman-bunny",
  ];

  const newYearBunnies = ["new-years-bunny", "new-years-bunny"];

  useEffect(() => {
    if (currentMonth == 2 && currentDay >= 16 && currentDay <= 18) {
      // st patricks day (march 16 to 18)
      setImgSrc(
        stPatricksDayBunnies[
          Math.floor(Math.random() * stPatricksDayBunnies.length)
        ],
      );
    } else if (currentMonth == 3 && currentDay >= 21 && currentDay <= 23) {
      // earth day (april 21 to 23)
      setImgSrc(
        earthDayBunnies[Math.floor(Math.random() * earthDayBunnies.length)],
      );
    } else if (currentMonth == 6 && currentDay >= 3 && currentDay <= 5) {
      // 4th of july (july 3 to 5)
      setImgSrc(
        americaBunnies[Math.floor(Math.random() * americaBunnies.length)],
      );
    } else if (currentMonth == 9 && currentDay >= 7) {
      // halloween (october 7 to 31)
      setImgSrc(
        halloweenBunnies[Math.floor(Math.random() * halloweenBunnies.length)],
      );
    } else if (currentMonth == 10 && currentDay >= 7 && currentDay <= 28) {
      // thanksgiving (november 7 to 28)
      setImgSrc(
        thanksgivingBunnies[
          Math.floor(Math.random() * thanksgivingBunnies.length)
        ],
      );
    } else if (
      (currentMonth == 11 && currentDay >= 30) ||
      (currentMonth == 0 && currentDay <= 2)
    ) {
      // new year (december 30 to january 2)
      setImgSrc(
        newYearBunnies[Math.floor(Math.random() * newYearBunnies.length)],
      );
    } else if (currentMonth == 11) {
      // christmas (december 1 to 29)
      setImgSrc(
        christmasBunnies[Math.floor(Math.random() * christmasBunnies.length)],
      );
    } else {
      setImgVis("hidden");
      setSvgVis("");
    }
  }, []);

  return (
    <>
      {/* header */}
      <header className="mt-12 mb-10 flex items-center justify-center text-center align-middle md:mt-14 md:mb-12">
        <div className="ml-1 text-center md:ml-2.5">
          {/* title */}
          <Link
            href="/"
            className={`${handwriting.className} cursor-pointer text-4xl font-bold text-sky-800 transition hover:text-sky-800/80 active:text-sky-800/70 md:text-5xl`}
          >
            <h1>
              JakeO
              <span className="text-3xl text-sky-800/70 md:text-4xl">.dev</span>
            </h1>
          </Link>

          {/* navigation */}
          <nav className="flex justify-center gap-x-2.5 text-stone-600 md:mt-1 md:gap-x-3">
            <Link
              href="/"
              className={`${
                pathname == "/"
                  ? "text-sky-600"
                  : "text-stone-400 hover:text-stone-700 active:text-stone-800"
              } text mb-0 rounded-md text-sm transition md:text-base`}
            >
              <span>/index</span>
            </Link>
            <Link
              href="/projects"
              className={`${
                pathname.startsWith("/projects")
                  ? "text-sky-600"
                  : "text-stone-400 hover:text-stone-700 active:text-stone-800"
              } text mb-0 rounded-md text-sm transition md:text-base`}
            >
              <span>/projects</span>
            </Link>
            <Link
              href="/blog"
              className={`${
                pathname.startsWith("/blog")
                  ? "text-sky-600"
                  : "text-stone-400 hover:text-stone-700 active:text-stone-800"
              } text mb-0 rounded-md text-sm transition md:text-base`}
            >
              <span>/blog</span>
            </Link>
          </nav>

          {/* socials */}
          <div className="mt-2 flex justify-center gap-2.5 md:mt-2.5 md:gap-3">
            <div className="relative h-min">
              <button
                onClick={() => {
                  setEmailModalOpen(!emailModalOpen);
                  setDiscordModalOpen(false);

                  if (!emailModalOpen)
                    setEmail(
                      (domain + currentLocalPart).split("").reverse().join(""),
                    );
                }}
                title="Click to reveal email"
                aria-label="Click to reveal email"
                className="flex cursor-pointer text-sm text-stone-500 transition hover:scale-110 hover:text-blue-500 active:scale-100 md:text-lg"
                ref={emailModalBtnRef}
              >
                <FontAwesomeIcon icon={faEnvelope} aria-hidden />
              </button>

              {/* email modal */}
              <div
                className={`${
                  emailModalOpen ? "visible-fade" : "invisible-fade"
                } absolute top-5 w-fit rounded-lg border-2 border-stone-200 bg-stone-50 px-3.5 py-1.5 shadow-sm md:top-6`}
                ref={emailModalRef}
              >
                <div className="flex w-max items-center md:text-lg">
                  <button onClick={() => newRandomEmail()}>
                    {/* hover:font-[450] */}
                    <span className="cursor-pointer text-blue-600 drop-shadow-sm drop-shadow-blue-500/30 transition hover:text-blue-700 hover:drop-shadow-sky-500/30 active:drop-shadow-none">
                      {email.split("@")[0]}
                    </span>
                  </button>
                  <span className="text-stone-600">@{email.split("@")[1]}</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/jakeo-dev"
              target="_blank"
              title="GitHub: jakeo-dev"
              aria-label="GitHub: jakeo-dev"
              className="flex h-min text-sm text-stone-500 transition hover:scale-110 hover:text-[#333333] active:scale-100 md:text-lg"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden />
            </a>

            <div className="relative h-min">
              <button
                onClick={() => {
                  setDiscordModalOpen(!discordModalOpen);
                  setEmailModalOpen(false);
                }}
                title="Discord: @jakeybakers"
                aria-label="Discord: @jakeybakers"
                className="flex cursor-pointer text-sm text-stone-500 transition hover:scale-110 hover:text-[#5865f2] active:scale-100 md:text-lg"
                ref={discordModalBtnRef}
              >
                <FontAwesomeIcon icon={faDiscord} aria-hidden />
              </button>

              {/* discord modal */}
              <div
                className={`${
                  discordModalOpen ? "visible-fade" : "invisible-fade"
                } absolute top-5 w-fit rounded-lg border-2 border-stone-200 bg-stone-50 px-3.5 py-1.5 shadow-sm md:top-6`}
                ref={discordModalRef}
              >
                <div className="flex items-center text-[#5865f2] md:text-lg">
                  <span>@jakeybakers</span>
                </div>
              </div>
            </div>

            <div className="-translate-x-1 -translate-y-0.75 md:-translate-y-1">
              <button
                className={imgVis}
                aria-label="Change bunny"
                onClick={() => {
                  if (
                    currentMonth == 2 &&
                    currentDay >= 16 &&
                    currentDay <= 18
                  ) {
                    // st patricks day (march 16 to 18)
                    let oldImage = imgSrc;
                    stPatricksDayBunnies.splice(
                      stPatricksDayBunnies.indexOf(oldImage),
                      1,
                    );
                    setImgSrc(
                      stPatricksDayBunnies[
                        Math.floor(Math.random() * stPatricksDayBunnies.length)
                      ],
                    );
                    stPatricksDayBunnies.push(oldImage);
                  } else if (
                    currentMonth == 3 &&
                    currentDay >= 21 &&
                    currentDay <= 23
                  ) {
                    // earth day (april 21 to 23)
                    let oldImage = imgSrc;
                    earthDayBunnies.splice(
                      earthDayBunnies.indexOf(oldImage),
                      1,
                    );
                    setImgSrc(
                      earthDayBunnies[
                        Math.floor(Math.random() * earthDayBunnies.length)
                      ],
                    );
                    earthDayBunnies.push(oldImage);
                  } else if (
                    currentMonth == 6 &&
                    currentDay >= 3 &&
                    currentDay <= 5
                  ) {
                    // 4th of july (july 3 to 5)
                    let oldImage = imgSrc;
                    americaBunnies.splice(americaBunnies.indexOf(oldImage), 1);
                    setImgSrc(
                      americaBunnies[
                        Math.floor(Math.random() * americaBunnies.length)
                      ],
                    );
                    americaBunnies.push(oldImage);
                  } else if (currentMonth == 9 && currentDay >= 7) {
                    // halloween (october 7 to 31)
                    let oldImage = imgSrc;
                    halloweenBunnies.splice(
                      halloweenBunnies.indexOf(oldImage),
                      1,
                    );
                    setImgSrc(
                      halloweenBunnies[
                        Math.floor(Math.random() * halloweenBunnies.length)
                      ],
                    );
                    halloweenBunnies.push(oldImage);
                  } else if (
                    currentMonth == 10 &&
                    currentDay >= 7 &&
                    currentDay <= 28
                  ) {
                    // thanksgiving (november 7 to 28)
                    let oldImage = imgSrc;
                    thanksgivingBunnies.splice(
                      thanksgivingBunnies.indexOf(oldImage),
                      1,
                    );
                    setImgSrc(
                      thanksgivingBunnies[
                        Math.floor(Math.random() * thanksgivingBunnies.length)
                      ],
                    );
                    thanksgivingBunnies.push(oldImage);
                  } else if (
                    (currentMonth == 11 && currentDay >= 30) ||
                    (currentMonth == 0 && currentDay <= 2)
                  ) {
                    // new year (december 30 to january 2)
                    let oldImage = imgSrc;
                    newYearBunnies.splice(newYearBunnies.indexOf(oldImage), 1);
                    setImgSrc(
                      newYearBunnies[
                        Math.floor(Math.random() * newYearBunnies.length)
                      ],
                    );
                    newYearBunnies.push(oldImage);
                  } else if (currentMonth == 11) {
                    // christmas (december 1 to 29)
                    let oldImage = imgSrc;
                    christmasBunnies.splice(
                      christmasBunnies.indexOf(oldImage),
                      1,
                    );
                    setImgSrc(
                      christmasBunnies[
                        Math.floor(Math.random() * christmasBunnies.length)
                      ],
                    );
                    christmasBunnies.push(oldImage);
                  } else {
                    setColor(
                      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                        Math.random() * 256,
                      )}, ${Math.floor(Math.random() * 256)})`,
                    );
                    setImgVis("hidden");
                    setSvgVis("");
                  }
                }}
              >
                <img
                  src={`https://bunnies.jakeo.dev/images/${imgSrc}.png`}
                  className="w-4.5 cursor-pointer object-contain transition hover:scale-110 hover:rotate-3 active:scale-100 active:rotate-0 md:w-6"
                  alt="Bunny icon"
                />
              </button>
              <button
                className={svgVis}
                aria-label="Change bunny"
                onClick={() =>
                  setColor(
                    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                      Math.random() * 256,
                    )}, ${Math.floor(Math.random() * 256)})`,
                  )
                }
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="w-4.5 cursor-pointer object-contain transition hover:scale-110 hover:rotate-3 active:scale-100 active:rotate-0 md:w-6"
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
          </div>
        </div>
      </header>
    </>
  );
}
