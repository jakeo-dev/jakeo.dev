import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Paper from "@/components/Paper";

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
  pinColor?: number;
}) {
  return (
    <div className="mb-4 flex h-min flex-col md:mb-6">
      <Image
        src={props.img}
        alt={props.imgAlt}
        className={`${
          props.showImg ? "" : "hidden"
        } h-44 w-full rounded-t-xl border-b-2 border-stone-200 object-cover md:h-52`}
        placeholder="blur"
      />

      <Link href={`${props.href}`} className="md:w-3/4 mx-auto">
        <Paper
          paperClassName="w-full"
          pinColor={props.pinColor}
          speed="slow"
          stackedPaperEffect
          clickable
        >
          <h1 className="text w-fit text-left text-xl font-medium text-stone-800">
            <span>{props.name}</span>
          </h1>
          <h2
            className={`${
              props.releaseDate != "" ? "" : "hidden"
            } mt-2.5 w-fit text-left text-sm text-stone-600`}
          >
            <span>{props.releaseDate}</span>
          </h2>
        </Paper>
      </Link>

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
