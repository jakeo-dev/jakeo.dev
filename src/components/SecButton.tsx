import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function SecButton(props: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  return (
    <a
      href={props.href}
      className={`flex border-2 border-gray-300 hover:bg-gray-200 active:bg-gray-300 text-gray-500 active:text-gray-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:shadow-none active:translate-y-0.5 w-full text-center rounded-full px-3.5 py-1 transition ${props.className}`}
      target="_blank"
    >
      <div className="flex items-center mx-auto">
        {props.children}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-sm ml-1.5"
          aria-hidden
        />
      </div>
    </a>
  );
}
