import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  href: string;
};

export default function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      className={`${props.className} bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white rounded-full px-3.5 py-1 transition-all`}
      target="_blank"
    >
      {props.children}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1.5" />
    </a>
  );
}
