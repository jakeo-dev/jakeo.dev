import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Callout(props: { children: React.ReactNode }) {
  return (
    <div className="my-6 text-pretty rounded-lg bg-gradient-to-r from-sky-500/20 to-sky-500/15 px-6 py-4 text-left">
      <FontAwesomeIcon
        icon={faStar}
        className="mr-2 text-sky-900"
        aria-hidden
      />
      <p className="inline text-left">{props.children}</p>
    </div>
  );
}
