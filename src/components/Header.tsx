import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Bunny from "@/components/Bunny";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const { pathname } = useRouter();

  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return width ? (
    <>
      {/* header */}
      <header className="my-10 text-left md:my-12">
        <div className="flex w-full items-center justify-center sm:relative">
          {/* socials */}
          <div className="mr-auto -ml-1 flex items-center justify-center gap-2.5 sm:absolute sm:left-0 sm:-ml-0 sm:gap-4">
            {/* bunny for sm screens */}
            {width < 640 ? <Bunny /> : null}

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
                className="flex cursor-pointer text-base text-stone-500 transition hover:scale-110 hover:text-sky-500 focus:text-sky-500 active:scale-110 active:text-sky-500 sm:hover:scale-100 sm:active:scale-100"
                ref={emailModalBtnRef}
              >
                {width >= 640 ? (
                  "email"
                ) : (
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden />
                )}
              </button>

              {/* email modal */}
              <div
                className={`${
                  emailModalOpen ? "visible-fade" : "invisible-fade"
                } absolute top-5 w-fit rounded-lg border-2 border-stone-200 bg-stone-50 px-3.5 py-1.5 shadow-sm sm:top-6`}
                ref={emailModalRef}
              >
                <div className="flex w-max items-center sm:text-lg">
                  <button onClick={() => newRandomEmail()}>
                    {/* hover:font-[450] */}
                    <span className="cursor-pointer text-sky-600 drop-shadow-sm drop-shadow-blue-500/30 transition hover:text-sky-700 hover:drop-shadow-sky-500/30 active:drop-shadow-none">
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
              className="flex h-min text-base text-stone-500 transition hover:scale-110 hover:text-stone-700 focus:text-stone-700 active:scale-110 active:text-stone-700 sm:hover:scale-100 sm:active:scale-100"
            >
              {width >= 640 ? (
                "github"
              ) : (
                <FontAwesomeIcon icon={faGithub} aria-hidden />
              )}
            </a>

            <div className="relative h-min">
              <button
                onClick={() => {
                  setDiscordModalOpen(!discordModalOpen);
                  setEmailModalOpen(false);
                }}
                title="Discord: @jakeybakers"
                aria-label="Discord: @jakeybakers"
                className="flex cursor-pointer text-base text-stone-500 transition hover:scale-110 hover:text-indigo-500 focus:text-indigo-500 active:scale-110 active:text-indigo-500 sm:hover:scale-100 sm:active:scale-100"
                ref={discordModalBtnRef}
              >
                {width >= 640 ? (
                  "discord"
                ) : (
                  <FontAwesomeIcon icon={faDiscord} aria-hidden />
                )}
              </button>

              {/* discord modal */}
              <div
                className={`${
                  discordModalOpen ? "visible-fade" : "invisible-fade"
                } absolute top-5 w-fit rounded-lg border-2 border-stone-200 bg-stone-50 px-3.5 py-1.5 shadow-sm sm:top-6`}
                ref={discordModalRef}
              >
                <div className="flex items-center text-[#5865f2] sm:text-lg">
                  <span>@jakeybakers</span>
                </div>
              </div>
            </div>
          </div>

          {/* bunny for not sm screens */}
          {width >= 640 ? <Bunny /> : null}

          {/* navigation */}
          <nav className="ml-auto flex h-min justify-center gap-2.5 text-stone-600 sm:absolute sm:right-0 sm:gap-4">
            <Link
              href="/"
              className={`${
                pathname == "/"
                  ? "text-sky-600"
                  : "text-stone-500 hover:text-stone-700 active:text-stone-800"
              } mb-0 ml-auto flex rounded-md text-sm transition sm:text-base`}
            >
              /index
            </Link>
            <Link
              href="/projects"
              className={`${
                pathname.startsWith("/projects")
                  ? "text-sky-600"
                  : "text-stone-500 hover:text-stone-700 active:text-stone-800"
              } mb-0 ml-auto flex rounded-md text-sm transition sm:text-base`}
            >
              /projects
            </Link>
            <Link
              href="/blog"
              className={`${
                pathname.startsWith("/blog")
                  ? "text-sky-600"
                  : "text-stone-500 hover:text-stone-700 active:text-stone-800"
              } mb-0 ml-auto flex rounded-md text-sm transition sm:text-base`}
            >
              /blog
            </Link>
          </nav>
        </div>
      </header>
    </>
  ) : null;
}
