import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ImageCarousel(props: {
  images: { src: string; alt: string }[];
  imagePosition: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? props.images.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === props.images.length - 1 ? 0 : prev + 1,
    );
  };

  // auto go to next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="post-img-div relative h-56 w-full overflow-hidden sm:h-96 md:h-[430px]">
      <div className="post-img relative h-full w-full">
        {props.images.map((image, i) => (
          <Image
            key={i}
            src={image.src}
            alt={props.images[i].alt}
            className={`rounded-md object-cover ${props.imagePosition} transition-opacity duration-300 ${
              i == currentIndex ? "opacity-100" : "opacity-0"
            }`}
            fill
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-600/60 px-2 py-[0.18rem] text-white transition hover:bg-gray-600 active:bg-gray-700"
      >
        <FontAwesomeIcon icon={faArrowLeft} aria-label="Previous image" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-600/60 px-2 py-[0.18rem] text-white transition hover:bg-gray-600 active:bg-gray-700"
      >
        <FontAwesomeIcon icon={faArrowRight} aria-label="Next image" />
      </button>
    </div>
  );
}
