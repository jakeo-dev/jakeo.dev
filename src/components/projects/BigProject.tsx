import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function BigProject(props: {
  name: string;
  children: React.ReactNode;
  images: { src: string; alt: string }[];
  imagePosition?: string;
  borderColor: string;
  shadowColor: string;
  href: string;
  className?: string;
}) {
  return (
    <div className={props.className}>
      <h2 className="sub0title">{props.name}</h2>
      <Link href={props.href}>
        <ImageCarousel
          images={props.images}
          imagePosition={props.imagePosition || "object-center"}
          className={`post-img relative container mx-auto h-36 w-full rounded-[14px] transition duration-300 hover:scale-102 active:scale-100 sm:h-48 md:h-56 ${props.borderColor}`}
          imageClassName={`rounded-xl shadow-lg ${props.shadowColor}`}
        />
      </Link>
      {props.children}
    </div>
  );
}
