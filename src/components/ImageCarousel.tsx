// component created by chatgpt

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Header(props: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [fade, setFade] = useState(false);

  // fade transition when going to previous image
  const prevSlide = () => {
    //setFade(true);
    //setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? props.images.length - 1 : prev - 1
      );
      //setFade(false);
    //}, 500);
  };

  // fade transition when going to next image
  const nextSlide = () => {
    //setFade(true);
    //setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === props.images.length - 1 ? 0 : prev + 1
      );
      //setFade(false);
    //}, 500);
  };

  // cycle through image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="postImgDiv relative w-full h-[430px] overflow-hidden">
      <div className="postImg relative w-full h-full">
        <Image
          src={props.images[currentIndex]}
          alt={`Image ${currentIndex}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md object-top transition-opacity" /* ${fade ? "opacity-0" : "opacity-100"} */
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-600/60 hover:bg-gray-600 active:bg-gray-700 text-white rounded-full px-2 py-[0.18rem] transition"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-600/60 hover:bg-gray-600 active:bg-gray-700 text-white rounded-full px-2 py-[0.18rem] transition"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
