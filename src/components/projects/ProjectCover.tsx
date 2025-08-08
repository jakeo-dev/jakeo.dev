export default function Contents(props: {
  title: string;
  desc: string;
  createDate: string;
  updateDate: string;
  logoImg: string;
  toolsList: string[];
}) {
  return (
    <div className="mb-6">
      <div className="sub0title mt-0 flex items-center pb-0">
        {props.logoImg != "" ? (
          <img
            src={props.logoImg}
            className="mr-2 inline w-7"
            alt={`${props.title} logo`}
          />
        ) : (
          ""
        )}
        <h1 className="inline">{props.title}</h1>
      </div>
      <h2 className="sub0title-subtext mt-0 hidden">{props.desc}</h2>

      <div className="post-dates-div">
        <h2>Created {props.createDate}</h2>
        <h2>Updated {props.updateDate}</h2>
      </div>

      <div className="mt-2.5 flex gap-2">
        {props.toolsList.map((tool, i) => (
          <span
            key={i}
            className="inline rounded-md bg-stone-200 px-2 py-0.5 text-sm text-stone-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
