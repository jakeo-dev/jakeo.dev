import Paper from "@/components/Paper";

export default function ProjectCover(props: {
  title: string;
  desc: string;
  createDate: string;
  updateDate: string;
  logoImg: string;
  toolsList: string[];
  titlePinColor?: number;
}) {
  return (
    <div>
      <Paper
        className="flex items-center justify-center"
        paperClassName="sub1title mt-0 text-center w-fit"
        pinColor={props.titlePinColor}
      >
        <div className="flex w-fit items-center justify-center gap-3">
          {props.logoImg != "" ? (
            <img
              src={props.logoImg}
              className="w-10"
              alt={`${props.title} logo`}
            />
          ) : (
            <></>
          )}
          <h1>{props.title}</h1>
        </div>
      </Paper>

      <div className="post-dates-div justify-center">
        <Paper speed="slow" padding="small">
          <h2>Created {props.createDate}</h2>
        </Paper>
        <Paper speed="slow" padding="small">
          <h2>Updated {props.updateDate}</h2>
        </Paper>
      </div>

      <div className="mt-2.5 flex justify-center gap-3 text-sm text-stone-600">
        {props.toolsList.map((tool, i) => (
          <Paper key={i} speed="slow" padding="small">
            <span>{tool}</span>
          </Paper>
        ))}
      </div>
    </div>
  );
}
