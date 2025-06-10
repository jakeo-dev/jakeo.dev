import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="mt-32 flex w-fit bg-gray-900 p-8 text-left">
        <img
          src="https://bunnies.jakeo.dev/images/solid-gradient-gray-bunny.png"
          alt="Solid gradient gray bunny"
          className="-ml-4 mr-4 w-20 object-contain md:w-28"
        />
        <h1 className="inline text-8xl font-extrabold text-gray-100 md:text-9xl">
          404
        </h1>
      </div>
      <h2 className="sub1title mt-0">that page doesn't exist...</h2>

      <Link href="/" className="sub1title internal-link mt-0 block text-3xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" aria-hidden />
        go back home
      </Link>
    </>
  );
}
