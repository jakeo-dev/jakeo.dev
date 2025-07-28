import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className="mt-32 border-[3px] border-black/10 p-0.5 md:border-4 md:p-1">
        <div className="border-[3px] border-black/20 p-0.5 md:border-4 md:p-1">
          <div className="border-[3px] border-black/30 p-0.5 md:border-4 md:p-1">
            <div className="border-[3px] border-black/40 p-0.5 md:border-4 md:p-1">
              <div className="border-[3px] border-black/50 p-0.5 md:border-4 md:p-1">
                <div className="border-[3px] border-black/60 p-0.5 md:border-4 md:p-1">
                  <div className="border-[3px] border-black/70 p-0.5 md:border-4 md:p-1">
                    <div className="border-[3px] border-black/80 p-0.5 md:border-4 md:p-1">
                      <div className="border-[3px] border-black/90 p-0.5 md:border-4 md:p-1">
                        <div className="bg-black p-6 md:py-12">
                          <h1 className="block text-6xl font-extrabold text-stone-100 md:text-9xl">
                            404
                          </h1>
                          <h2 className="mt-1 block text-pretty text-center leading-5 text-stone-100">
                            that page doesn't exist...
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="internal-link mt-8 block text-left text-lg font-medium md:text-xl"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" aria-hidden />
        go back home
      </Link>

      {/* <h3 className="text mb-0 mt-10 text-left text-stone-600">
        or check out some of my other stuff:
      </h3>
      <div className="flex gap-4 text-left text-xl font-medium md:text-2xl">
        <Link href="/projects" className="internal-link block">
          projects
        </Link>
        <Link href="/blog" className="internal-link block">
          posts
        </Link>
      </div> */}

      <h2 className="text mb-0 mt-8 text-left text-stone-600">
        or maybe this page is supposed to exist? contact me:
      </h2>
      <div className="flex gap-4 text-left text-lg font-medium md:text-xl">
        <span>
          <FontAwesomeIcon icon={faEnvelope} className="mr-1.5" aria-hidden />
          hi@jakeo.dev
        </span>
        <span>
          <FontAwesomeIcon icon={faDiscord} className="mr-1.5" aria-hidden />
          @jakeybakers
        </span>
      </div>
    </>
  );
}
