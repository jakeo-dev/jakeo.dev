import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Callout(props: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200/70 rounded-lg text-left px-6 py-4 my-6 text-pretty">
      <FontAwesomeIcon icon={faStar} className="mr-2" aria-hidden />
      <p className="inline text-left">{props.children}</p>
    </div>
  );
}
