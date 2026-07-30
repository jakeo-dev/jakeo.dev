import { useState } from "react";
import Image from "next/image";

export default function JLogo(props: {
  className?: string;
  widthClassName?: string;
}) {
  const [imgSrc, setImgSrc] = useState("j-logo-black");

  const jLogos = [
    "j-logo-red",
    "j-logo-red-light",
    "j-logo-orange",
    "j-logo-orange-light",
    "j-logo-yellow",
    "j-logo-yellow-light",
    "j-logo-green",
    "j-logo-green-light",
    "j-logo-turquoise",
    "j-logo-turquoise-light",
    "j-logo-blue",
    "j-logo-blue-light",
    "j-logo-purple",
    "j-logo-purple-light",
    "j-logo-pink",
    "j-logo-pink-light",
    "j-logo-white",
    "j-logo-black",
  ];

  // set imgsrc to a new random jlogo
  function newRandomJLogo() {
    const newLogo = jLogos.filter((str) => str !== imgSrc)[
      Math.floor(
        Math.random() * (jLogos.length - (jLogos.includes(imgSrc) ? 1 : 0)),
      )
    ];
    setImgSrc(newLogo);
  }

  return (
    <button
      aria-label="Change color of J logo"
      onClick={() => {
        newRandomJLogo();
      }}
      className={`cursor-pointer rounded-full border-[1.5px] border-black/10 transition hover:scale-110 hover:rotate-3 hover:drop-shadow-sm active:scale-90 active:-rotate-3 active:drop-shadow-none sm:border-2 sm:active:scale-100 sm:active:rotate-0 ${props.className}`}
    >
      <Image
        src={`/logos/${imgSrc}.png`}
        width={100}
        height={100}
        className={`rounded-full ${props.widthClassName || "w-7 md:w-9"}`}
        alt="J logo"
      />
    </button>
  );
}
