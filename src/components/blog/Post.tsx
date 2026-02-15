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
          className="text-lg font-medium underline decoration-stone-300 decoration-[2.5px] underline-offset-2 drop-shadow-lg drop-shadow-black/10 transition hover:decoration-stone-400 hover:drop-shadow-md active:decoration-stone-500 active:drop-shadow-sm md:text-xl"
          href={`${props.href}`}
        >
          {props.name}
        </Link>
      </div>
      <div className="post-dates">
        <h2 className={props.releaseDate != "" ? "inline" : "hidden"}>
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
