import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Post(props: {
  name: string;
  desc: string;
  releaseDate?: string;
  updateDate?: string;
  fadeDesc: boolean;
  img: StaticImageData;
  imgAlt: string;
  showImg: boolean;
  href: string;
}) {
  return (
    <div className="mt-2 mb-6 flex flex-col md:mb-8">
      <Image
        src={props.img}
        alt={props.imgAlt}
        className={`${
          props.showImg ? "" : "hidden"
        } h-44 w-full rounded-t-xl border-b-2 border-stone-200 object-cover md:h-52`}
        placeholder="blur"
      />

      <div className="text-left">
        <Link
          className="text-lg font-medium underline decoration-stone-300 decoration-4 transition hover:decoration-stone-400 active:decoration-stone-500 md:text-xl"
          href={`${props.href}`}
        >
          {props.name}
        </Link>
      </div>
      <div className="mt-2.5 flex gap-3">
        <h2
          className={`${
            props.releaseDate != "" ? "inline" : "hidden"
          } text-xs text-stone-600 md:text-sm`}
        >
          {props.releaseDate}
        </h2>
      </div>
      {/* <h2
        className={`${
          props.fadeDesc ? "fade-text" : ""
        } text text-stone-600 mt-2 mb-0`}
      >
        {props.desc}
      </h2> */}
    </div>
  );
}
