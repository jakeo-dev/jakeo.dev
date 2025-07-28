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
      className={`flex w-full rounded-full border-2 border-stone-300 px-3.5 py-1.5 text-center text-stone-500 shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-200 hover:shadow-md active:translate-y-0.5 active:bg-stone-300 active:text-stone-600 active:shadow-none ${props.className}`}
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
