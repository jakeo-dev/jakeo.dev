import { useState } from "react";
import Image from "next/image";

export default function JLogo(props: {
  className?: string;
  widthClassName?: string;
}) {
  const [imgSrc, setImgSrc] = useState("j-logo-blue");

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
  function newRandomLogo() {
    const newLogo = jLogos.filter((str) => str !== imgSrc)[
      Math.floor(
        Math.random() * (jLogos.length - (jLogos.includes(imgSrc) ? 1 : 0)),
      )
    ];
    console.log(jLogos);
    console.log(newLogo);
    setImgSrc(newLogo);
  }

  return (
    <div
      className={`flex items-center justify-center transition hover:drop-shadow-sm active:drop-shadow-none ${props.className}`}
    >
      <button
        aria-label="Change logo"
        onClick={() => {
          newRandomLogo();
        }}
      >
        <Image
          src={`/logos/${imgSrc}.png`}
          width={100}
          height={100}
          className={`cursor-pointer rounded-full object-contain transition hover:scale-110 hover:rotate-3 active:scale-100 active:rotate-0 ${props.widthClassName || "w-8 md:w-10"}`}
          alt="J logo"
        />
      </button>
    </div>
  );
}
