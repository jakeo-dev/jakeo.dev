import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function BigProject(props: {
  title: string;
  desc: string;
  images: { src: string; alt: string }[];
  imagePosition?: string;
  bgColor: string;
  borderColor: string;
  href: string;
}) {
  return (
    <>
      <h1 className="sub0title pb-0">{props.title}</h1>
      <h2 className="sub0title-subtext mb-4 pt-1">{props.desc}</h2>
      <Link href={props.href}>
        <div
          className={`post-img relative h-68 w-full rounded-2xl border-8 sm:h-96 md:h-[550px] ${props.bgColor} ${props.borderColor} group transition duration-500 hover:scale-90 hover:shadow-md`}
        >
          <ImageCarousel
            images={props.images}
            imagePosition={props.imagePosition || "object-center"}
            className="absolute top-1/2 left-1/2 h-48 w-[95%] -translate-x-1/2 -translate-y-1/2 scale-115 transition duration-500 group-hover:scale-120 group-hover:shadow-lg group-active:scale-110 sm:h-80 md:h-[400px] md:scale-100 md:group-active:scale-115"
            imageClassName="border-0 shadow-md"
          />
        </div>
      </Link>
    </>
  );
}
