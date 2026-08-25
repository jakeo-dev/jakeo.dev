import Link from "next/link";

export default function Project(props: {
  name: string;
  desc: string;
  releaseDate?: string;
  updateDate?: string;
  toolsList?: string[];
  logo: string;
  showLogo?: boolean;
  type: number;
  colors?: string;
  link: string;
  logoBig?: boolean;
}) {
  if (props.type == 0) {
    // current project
    return (
      <Link
        href={`/projects/${props.name.replace(/\s/g, "-").split(".")[0].toLowerCase()}`}
        className={`${
          !props.colors
            ? "hover:border-sky-600 hover:shadow-sky-500/30"
            : props.colors
        } group relative mb-4 flex h-min flex-col rounded-[14px] border-2 border-stone-200 bg-stone-50 shadow-sm shadow-stone-300/50 transition duration-300 last:mb-0 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-none md:mb-6`}
      >
        <img
          src={props.logo}
          className={`${props.showLogo ? "inline" : "hidden"} ${props.logoBig ? "top-3 right-3 w-10 sm:top-1/2 sm:right-5 sm:w-26 sm:-translate-y-1/2 sm:transform" : "top-4 right-4 w-8 sm:top-1/2 sm:right-7 sm:w-22 sm:-translate-y-1/2 sm:transform"} absolute z-0 rotate-5 transition duration-300 group-hover:rotate-2 group-active:rotate-0`}
          alt={`${props.name} logo`}
        />

        <div className="relative w-full flex-grow p-5 md:p-6 md:pr-32">
          <div className="relative z-10">
            <h1 className="text-left text-base font-medium md:text-lg">
              {props.name}
            </h1>
            <h2 className="text mt-2 mb-0 leading-6 text-stone-600 md:leading-7">
              {props.desc}
            </h2>
            <div
              className={`flex flex-wrap gap-2 ${
                props.toolsList && props.toolsList.length > 0 ? "mt-2.5" : ""
              }`}
            >
              {props.toolsList &&
                props.toolsList.length > 0 &&
                props.toolsList.map((tool, i) => (
                  <span
                    key={i}
                    className="inline rounded-md bg-stone-200 px-2 py-0.75 text-xs text-stone-700 md:py-0.5 md:text-sm"
                  >
                    {tool}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Link>
    );
  } else if (props.type == 1) {
    // past project
    return (
      <a
        href={props.link}
        target="_blank"
        className="group relative mb-4 flex flex-col rounded-[14px] border-2 border-stone-200 bg-stone-50 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-stone-400 hover:shadow-md active:translate-y-0.5 active:shadow-none md:mb-6"
      >
        <img
          src={props.logo}
          className={`${props.showLogo ? "inline" : "hidden"} ${props.logoBig ? "top-3 right-3 w-10 sm:top-1/2 sm:right-5 sm:w-26 sm:-translate-y-1/2 sm:transform" : "top-4 right-4 w-8 sm:top-1/2 sm:right-7 sm:w-22 sm:-translate-y-1/2 sm:transform"} absolute z-0 rotate-5 transition duration-300 group-hover:rotate-2 group-active:rotate-0`}
          alt={`${props.name} logo`}
        />

        <div className="relative w-full flex-grow p-5 md:p-6 md:pr-32">
          <div className="relative z-10">
            {" "}
            <h1 className="flex items-center text-left text-base font-medium md:text-lg">
              {props.name}
            </h1>
            <h2 className="text mt-2 mb-0 leading-6 text-stone-600 md:leading-7">
              {props.desc}
            </h2>
            <div
              className={`flex flex-wrap gap-2 ${
                props.toolsList && props.toolsList.length > 0 ? "mt-2.5" : ""
              }`}
            >
              {props.toolsList &&
                props.toolsList.length > 0 &&
                props.toolsList.map((tool, i) => (
                  <span
                    key={i}
                    className="inline rounded-md bg-stone-200 px-2 py-0.75 text-xs text-stone-700 md:py-0.5 md:text-sm"
                  >
                    {tool}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </a>
    );
  }
}
