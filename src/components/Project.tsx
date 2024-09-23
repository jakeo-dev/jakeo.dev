import Image from "next/image";
import { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Project(props: {
  children: React.ReactNode;
  name: string;
  desc: string;
  releaseDate: string;
  updateDate: string;
  img: StaticImageData;
  showImg: boolean;
  logo: string;
  showLogo: boolean;
}) {
  return (
    <div className="relative flex flex-col rounded-xl border-2 border-gray-200 hover:bg-gray-200 transition">
      {/* <img
        src={props.logo}
        className={`${
          props.showLogo ? "" : "hidden"
        } absolute object-cover h-5/6 opacity-15 transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
        alt={`${props.name} logo`}
      /> */}

      <Image
        src={props.img}
        alt={`Screenshot of ${props.name}`}
        className={`${
          props.showImg ? "" : "hidden"
        } w-full object-cover h-44 md:h-52 border-b-2 border-gray-200 rounded-t-xl`}
        placeholder="blur"
      />

      <div className="flex-grow w-full p-6">
        <h1 className="text-xl text-left font-medium flex items-center">
          <img
            src={props.logo}
            className={`${props.showLogo ? "" : "hidden"} inline w-6 mr-1.5`}
            alt={`${props.name} logo`}
          />
          {props.name}
        </h1>
        <h2 className="text mt-2 mb-0">{props.desc}</h2>
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
      </div>
      <div className="flex gap-3 px-6 pb-6">{props.children}</div>
    </div>
  );
}
