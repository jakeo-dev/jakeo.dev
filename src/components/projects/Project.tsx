import Link from "next/link";
import Paper from "@/components/Paper";

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
  pinColor?: number;
}) {
  if (props.type == 0) {
    // current project
    return (
      <Link
        href={`/projects/${props.name.split(".")[0].toLowerCase()}`}
        className="relative mb-4 flex h-min flex-col md:mb-6"
      >
        <Paper paperClassName="w-full flex-grow" pinColor={props.pinColor}>
          <h1 className="flex items-center text-left text-xl font-medium">
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
        </Paper>
      </Link>
    );
  } else if (props.type == 1) {
    // past project
    return (
      <a
        href={props.link}
        target="_blank"
        className="relative mb-4 flex h-min flex-col md:mb-6"
      >
        <Paper paperClassName="relative w-full flex-grow p-6" pinColor={9}>
          <h1 className="flex items-center text-left text-xl font-medium">
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
        </Paper>
      </a>
    );
  }
}
