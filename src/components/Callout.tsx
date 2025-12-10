import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Callout(props: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex items-center gap-3 rounded-lg bg-gradient-to-r from-sky-500/20 to-sky-500/15 px-6 py-4 text-left shadow-md shadow-sky-500/10">
      <FontAwesomeIcon
        icon={faStar}
        className="text-2xl text-sky-600 md:text-3xl"
        aria-hidden
      />
      <p className="text inline text-left leading-6 text-pretty md:leading-7">
        {props.children}
      </p>
    </div>
  );
}
