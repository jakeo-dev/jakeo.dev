import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Button(props: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  return (
    <a
      href={props.href}
      className={`flex border-2 ${
        !props.className.includes("bg-")
          ? "border-sky-600 bg-sky-600 hover:border-sky-700 hover:bg-sky-700 active:border-sky-800 active:bg-sky-800"
          : ""
      } w-full rounded-full px-3.5 py-1.5 text-center text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-none ${
        props.className
      }`}
      target="_blank"
    >
      <div className="mx-auto flex items-center">
        {props.children}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="ml-1.5 text-sm"
          aria-hidden
        />
      </div>
    </a>
  );
}
