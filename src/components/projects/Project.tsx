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
}) {
  if (props.type == 0) {
    // current project
    return (
      <Link
        href={`/projects/${props.name.replace(/\s/g, "-").split(".")[0].toLowerCase()}`}
        className={`${
          !props.colors ? "hover:border-sky-600" : props.colors
        } relative mb-4 flex h-min flex-col rounded-xl border-4 border-stone-200 bg-stone-100 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-none md:mb-6`}
      >
        <div className="relative w-full flex-grow p-5 md:p-6">
          <h1 className="flex items-center text-left text-lg font-medium md:text-xl">
            <img
              src={props.logo}
              className={`${props.showLogo ? "inline" : "hidden"} mr-1.5 w-6`}
              alt={`${props.name} logo`}
            />
            <span>{props.name}</span>
          </h1>
          <h2 className="text mt-2 mb-0 text-stone-600">{props.desc}</h2>
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
                  className="inline rounded-md bg-stone-200 px-2 py-0.5 text-sm text-stone-700"
                >
                  {tool}
                </span>
              ))}
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
        className="relative mb-4 flex flex-col rounded-xl border-4 border-stone-200 bg-stone-100 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-stone-400 hover:shadow-md active:translate-y-0.5 active:shadow-none md:mb-6"
      >
        <div className="relative w-full flex-grow p-5 md:p-6">
          <h1 className="flex items-center text-left text-lg font-medium md:text-xl">
            <img
              src={props.logo}
              className={`${props.showLogo ? "inline" : "hidden"} mr-1.5 w-6`}
              alt={`${props.name} logo`}
            />
            <span>{props.name}</span>
          </h1>
          <h2 className="text mt-2 mb-0 text-stone-600">{props.desc}</h2>
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
                  className="inline rounded-md bg-stone-200 px-2 py-0.5 text-sm text-stone-700"
                >
                  {tool}
                </span>
              ))}
          </div>
        </div>
      </a>
    );
  }
}
