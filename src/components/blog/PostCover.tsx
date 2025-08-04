import Image, { StaticImageData } from "next/image";
import Paper from "@/components/Paper";

export default function PostCover(props: {
  title: string;
  date: string;
  img: StaticImageData;
  imgAlt: string;
  imgSubtext: string;
}) {
  return (
    <>
      <Paper
        paperClassName="sub1title mt-0 p-0 mb-3 mx-auto w-fit"
        speed="slow"
      >
        <h1>{props.title}</h1>
      </Paper>

      <div className="post-dates-div justify-center">
        <Paper speed="slow" padding="small">
          <span>{props.date}</span>
        </Paper>
      </div>

      <Paper className="post-img-div" padding="none" speed="slow">
        <Image
          src={props.img}
          alt={props.imgAlt}
          className="post-img"
          placeholder="blur"
        />
        <p className={props.imgSubtext != "" ? "subtext" : ""}>
          {props.imgSubtext}
        </p>
      </Paper>
    </>
  );
}
