import Image, { StaticImageData } from "next/image";

export default function Contents(props: {
  title: string;
  date: string;
  img: StaticImageData;
  imgAlt: string;
  imgSubtext: string;
}) {
  return (
    <>
      <h1 className="sub0title mt-0 pb-0">{props.title}</h1>

      <h2 className="post-dates-div text">{props.date}</h2>

      <div className="my-6">
        <Image
          src={props.img}
          alt={props.imgAlt}
          className="post-img rounded-xl md:rounded-3xl"
          placeholder="blur"
        />
        <p className={props.imgSubtext != "" ? "subtext" : ""}>
          {props.imgSubtext}
        </p>
      </div>
    </>
  );
}
