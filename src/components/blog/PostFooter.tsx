import StickyNote from "@/components/StickyNote";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import localFont from "next/font/local";
const handwriting = localFont({
  src: "../../fonts/Jakes_Handwriting_V5-Regular.ttf",
  display: "swap",
  variable: "--font-handwriting",
});

export default function PostFooter() {
  return (
    <StickyNote
      className={`mx-auto mt-18 w-fit text-center ${handwriting.className}`}
      noteClassName="w-36 h-36 lg:w-40 lg:h-40 flex items-center justify-center"
      bgColor={2}
      clickable
      padding="none"
    >
      <Link
        href="/blog"
        className="internal-link flex items-center justify-center gap-4 p-6 text-xl no-underline lg:gap-5 lg:text-2xl"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-3xl lg:text-4xl"
          aria-hidden
        />
        <span className="w-min">Read more posts</span>
      </Link>
    </StickyNote>
  );
}
