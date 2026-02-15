export default function Contents(props: {
  title: string;
  desc: string;
  createDate: string;
  updateDate: string;
  logoImg?: string;
  logoBig?: boolean;
  toolsList: string[];
  collaborators?: {
    name: string;
    link: string;
    img: string;
    imgSize?: string;
  }[];
}) {
  return (
    <div className="mb-6">
      <div className="sub0title mt-0 flex items-center pb-0">
        {props.logoImg ? (
          <img
            src={props.logoImg}
            className={`inline ${props.logoBig ? "w-7.5 md:w-8.5 mr-2" : "w-6.5 md:w-7.5 mr-2.5"}`}
            alt={`${props.title} logo`}
          />
        ) : null}
        <h1 className="inline">{props.title}</h1>
      {props.collaborators ? (
          <div className="mt-1 ml-3 flex items-center gap-1.5 rounded-full bg-stone-200 px-1.5 py-1 font-medium">
          {props.collaborators.map((collab, i) => (
            <a
              href={collab.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline text-xs text-stone-700 transition hover:scale-110 active:scale-100 md:text-sm"
              key={i}
            >
              <img
                src={collab.img}
                className={`${collab.imgSize || "w-6"} rounded-full`}
                alt={collab.name}
              />
            </a>
          ))}
        </div>
      ) : null}
      </div>
      <h2 className="sub0title-subtext hidden leading-6 md:leading-7">
        {props.desc}
      </h2>

      <div className="post-dates-div">
        <h2>Created {props.createDate}</h2>
        <h2>Updated {props.updateDate}</h2>
      </div>

      <div className="mt-2.5 flex gap-2">
        {props.toolsList.map((tool, i) => (
          <span
            key={i}
            className="inline rounded-md bg-stone-200 px-2 py-0.75 text-xs text-stone-700 md:py-0.5 md:text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
