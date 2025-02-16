import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Post(props: {
  name: string;
  desc: string;
  releaseDate: string;
  updateDate: string;
  fadeDesc: boolean;
  img: StaticImageData;
  showImg: boolean;
  href: string;
}) {
  return (
    <div className="flex flex-col mt-2 mb-10">
      <Image
        src={props.img}
        alt={`Screenshot of ${props.name}`}
        className={`${
          props.showImg ? "" : "hidden"
        } w-full object-cover h-44 md:h-52 border-b-2 border-gray-200 rounded-t-xl`}
        placeholder="blur"
      />

      <div className="text-left">
        <Link className="link text-xl font-medium" href={`${props.href}`}>
          {props.name}
        </Link>
      </div>
      <div className="flex gap-3 mt-2.5">
        <h2
          className={`${
            props.releaseDate != "" ? "inline" : "hidden"
          } text-sm text-gray-600`}
        >
          <FontAwesomeIcon
            icon={faCalendarDay}
            className="mr-1.5"
            aria-label="Initial release"
          />
          {props.releaseDate}
        </h2>
        <h2
          className={`${
            props.updateDate != "" ? "inline" : "hidden"
          } text-sm text-gray-600`}
        >
          <FontAwesomeIcon
            icon={faRotateRight}
            className="mr-1.5"
            aria-label="Last updated"
          />
          {props.updateDate}
        </h2>
      </div>
      <h2 className={`${props.fadeDesc ? "fade-text" : ""} text mt-2 mb-0`}>
        {props.desc}
      </h2>
    </div>
  );
}
