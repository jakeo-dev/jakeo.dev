import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import StickyNote from "@/components/StickyNote";

export default function Button(props: {
  children: React.ReactNode;
  className?: string;
  href: string;
  bgColor?: number;
}) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full text-center ${props.className}`}
    >
      <StickyNote bgColor={props.bgColor} clickable>
        {props.children}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="ml-1.5 text-sm"
          aria-hidden
        />
      </StickyNote>
    </a>
  );
}
