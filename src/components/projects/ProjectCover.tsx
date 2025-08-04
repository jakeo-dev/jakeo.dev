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
        paperClassName="sub1title mt-0 mb-3 text-center w-fit"
        pinColor={props.titlePinColor}
      >
        <div className="flex w-fit items-center justify-center gap-2 md:gap-3">
          {props.logoImg != "" ? (
            <img
              src={props.logoImg}
              className="w-7 sm:w-8 md:w-10"
              alt={`${props.title} logo`}
            />
          ) : (
            <></>
          )}
          <h1>{props.title}</h1>
        </div>
      </Paper>

      <div className="post-dates-div mb-3 justify-center">
        <Paper speed="slow" padding="small">
          <span>Created {props.createDate}</span>
        </Paper>
        <Paper speed="slow" padding="small">
          <span>Updated {props.updateDate}</span>
        </Paper>
      </div>

      <div className="post-dates-div justify-center">
        {props.toolsList.map((tool, i) => (
          <Paper key={i} speed="slow" padding="small">
            <span>{tool}</span>
          </Paper>
        ))}
      </div>
    </div>
  );
}
