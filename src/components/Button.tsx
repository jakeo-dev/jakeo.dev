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
          ? "border-sky-600 hover:border-sky-700 active:border-sky-800 bg-sky-600 hover:bg-sky-700 active:bg-sky-800"
          : ""
      } text-white w-full text-center rounded-full hover:shadow-md active:shadow-none px-3.5 py-1.5 transition ${
        props.className
      }`}
      target="_blank"
    >
      <div className="flex items-center mx-auto">
        {props.children}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-sm ml-1.5"
        />
      </div>
    </a>
  );
}
