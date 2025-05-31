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
      } bg-black/50 flex justify-center items-center fixed top-0 left-0 z-30 w-full h-full overflow-auto ${
        props.className
      }`}
    >
      <div className="relative bg-gray-200 rounded-lg w-fit shadow-sm px-10 py-7">
        <button
          className="absolute top-4 right-5 text-base hover:text-gray-500 transition"
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
