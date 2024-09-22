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
      className={`${props.className} flex border-2 border-sky-500 hover:border-sky-600 active:border-sky-700 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white w-full text-center rounded-full hover:shadow-md active:shadow-none px-3.5 py-1 transition`}
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
