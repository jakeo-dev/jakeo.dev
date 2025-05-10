export default function Contents(props: {
  title: string;
  desc: string;
  createDate: string;
  updateDate: string;
  logoImg: string;
  toolsList: string[];
}) {
  return (
    <div>
      <div className="sub1title flex items-center mt-0 pb-0">
        <img
          src={props.logoImg}
          className="inline w-8 mr-2"
          alt={`${props.title} logo`}
        />
        <h1 className="inline">{props.title}</h1>
      </div>
      <h2 className="hidden sub1titleSubtext mt-0">{props.desc}</h2>

      <div className="postDatesDiv">
        <h2>Created {props.createDate}</h2>
        <h2>Updated {props.updateDate}</h2>
      </div>

      <div className="flex gap-2 mt-2.5">
        {props.toolsList.map((tool, i) => (
          <span
            key={i}
            className="inline text-sm bg-gray-200 text-gray-700 rounded-md px-2 py-0.5"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="">
      <div className="sub1title flex items-center mt-0 pb-0">
        <img
          src={props.logoImg}
          className="inline w-8 mr-2"
          alt={`${props.title} logo`}
        />
        <h1 className="inline">{props.title}</h1>
      </div>

      <div className="postDatesDiv">
        <h2>Created {props.createDate}</h2>
        <h2>Updated {props.updateDate}</h2>
      </div>

      <div className="flex gap-2 mt-2.5">
        {props.toolsList.map((tool, i) => (
          <span
            key={i}
            className="inline text-sm bg-gray-200 text-gray-700 rounded-md px-1.5 py-0.5"
          >
            {tool}
          </span>
        ))}
      </div>
    </div> */
}
