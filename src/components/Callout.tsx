import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Paper from "@/components/Paper";

export default function Callout(props: { children: React.ReactNode }) {
  return (
    <Paper
      className="my-6 rounded-lg text-left text-pretty"
      paperClassName="flex items-center gap-3 bg-gradient-to-r from-sky-200/75 to-sky-200/80"
      pinColor={2}
      speed="slow"
    >
      <FontAwesomeIcon
        icon={faStar}
        className="text-3xl text-sky-600"
        aria-hidden
      />
      <p className="inline text-left">{props.children}</p>
    </Paper>
  );
}
