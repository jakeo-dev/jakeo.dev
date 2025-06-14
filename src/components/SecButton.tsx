import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function SecButton(props: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <a
      href={props.href}
      className={`flex w-full rounded-full border-2 border-gray-300 px-3.5 py-1 text-center text-gray-500 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-md active:translate-y-0.5 active:bg-gray-300 active:text-gray-600 active:shadow-none ${props.className}`}
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
