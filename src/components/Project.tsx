import Link from "next/link";

export default function Project(props: {
  name: string;
  desc: string;
  releaseDate?: string;
  updateDate?: string;
  toolsList?: string[];
  logo: string;
  showLogo: boolean;
  type: number;
  colors?: string;
  link: string;
}) {
  if (props.type == 0) {
    // current project
    return (
      <Link
        href={`/projects/${props.name.split(".")[0].toLowerCase()}`}
        className={`${
          !props.colors ? " hover:border-sky-600" : props.colors
        } bg-gray-100 border-4 border-gray-200 h-min relative flex flex-col rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:shadow-none active:translate-y-0.5 transition duration-200 mb-4 md:mb-6`}
      >
        <div className="flex-grow w-full relative p-6">
          <h1 className="text-xl text-left font-medium flex items-center">
            <img
              src={props.logo}
              className={`${props.showLogo ? "" : "hidden"} inline w-6 mr-1.5`}
              alt={`${props.name} logo`}
            />
            <span>{props.name}</span>
          </h1>
          <h2 className="text text-gray-600 mt-2 mb-0">{props.desc}</h2>
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
                  className="inline text-sm bg-gray-200 text-gray-700 rounded-md px-2 py-0.5"
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
        className="bg-gray-100 border-4 border-gray-200 hover:border-gray-400 relative flex flex-col rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:shadow-none active:translate-y-0.5 transition duration-200 mb-4 md:mb-6"
      >
        <div className="flex-grow w-full relative p-6">
          <h1 className="text-xl text-left font-medium flex items-center">
            <img
              src={props.logo}
              className={`${props.showLogo ? "" : "hidden"} inline w-6 mr-1.5`}
              alt={`${props.name} logo`}
            />
            <span>{props.name}</span>
          </h1>
          <h2 className="text text-gray-600 mt-2 mb-0">{props.desc}</h2>
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
                  className="inline text-sm bg-gray-200 text-gray-700 rounded-md px-2 py-0.5"
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
