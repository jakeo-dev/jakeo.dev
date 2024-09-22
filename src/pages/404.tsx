import Header from "../components/Header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      {/* header */}
      <Header />

      <div className="block text-left bg-gray-900 w-fit p-8">
        <h1 className="text-9xl font-extrabold text-gray-100 inline mt-16">
          404
        </h1>
      </div>
      <h2 className="sub1title mt-0">that page doesn't exist...</h2>
      <Link href="/" className="sub1title text-3xl block link mt-0">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        go back home
      </Link>
    </>
  );
}
