import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="flex text-left bg-gray-900 w-fit p-8 mt-32">
        <img
          src="https://bunnies.jakeo.dev/images/solid-gradient-gray-bunny.png"
          alt="Solid gradient gray bunny"
          className="w-20 md:w-28 object-contain -ml-4 mr-4"
        />
        <h1 className="text-8xl md:text-9xl font-extrabold text-gray-100 inline">
          404
        </h1>
      </div>
      <h2 className="sub1title mt-0">that page doesn't exist...</h2>

      <Link href="/" className="sub1title text-3xl block link mt-0">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" aria-hidden />
        go back home
      </Link>
    </>
  );
}
