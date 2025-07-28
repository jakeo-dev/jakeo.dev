import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props: {
  children: React.ReactNode;
  className: string;
  open: boolean;
  onClose: () => void; // handles closing modal
}) {
  return (
    <div
      className={`${
        props.open ? "visible-fade" : "invisible-fade"
      } fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center overflow-auto bg-black/50 ${
        props.className
      }`}
    >
      <div className="relative w-fit rounded-lg bg-stone-200 px-10 py-7 shadow-sm">
        <button
          className="absolute right-5 top-4 text-base transition hover:text-stone-500"
          onClick={() => {
            props.onClose(); // close modal
          }}
        >
          <FontAwesomeIcon icon={faXmark} aria-label="Close modal" />
        </button>
        {props.children}
      </div>
    </div>
  );
}
