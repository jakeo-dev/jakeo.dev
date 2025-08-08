import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Callout(props: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex items-center gap-3 rounded-lg bg-gradient-to-r from-sky-500/20 to-sky-500/15 px-6 py-4 text-left text-pretty">
      <FontAwesomeIcon
        icon={faStar}
        className="text-3xl text-sky-600"
        aria-hidden
      />
      <p className="inline text-left text-pretty">{props.children}</p>
    </div>
  );
}
