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
      className={`${props.className} flex border-2 border-gray-300 hover:bg-gray-300 text-gray-500 w-full text-center rounded-full hover:shadow-md active:shadow-none px-3.5 py-1 transition-all`}
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
