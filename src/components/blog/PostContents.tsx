import Paper from "@/components/Paper";

export default function PostContents(props: { subtitles: string[] }) {
  return (
    <>
      <div className="self-start lg:sticky lg:top-6 lg:mr-30 lg:flex-[0.1] xl:top-10 xl:mr-0 xl:w-0 xl:flex-[0]">
        <Paper
          className="mb-12 lg:mr-[-12rem] lg:mb-0 lg:ml-6 xl:mr-[-13rem] xl:ml-10 xl:gap-x-6 xl:gap-y-2 xl:rounded-lg 2xl:mr-[-16rem]"
          paperClassName="bg-stone-200/95"
          speed="off"
        >
          <p className="sub2title mt-0 pt-0">Contents</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-1">
            {props.subtitles.map((subtitle, index) => (
              <a
                key={index}
                href={`#${subtitle
                  .replace(/\s+|\.+/g, "-")
                  .replace(/[^a-zA-Z0-9-]/g, "")
                  .toLowerCase()}`}
                className="text internal-link mb-0 block leading-6 no-underline"
              >
                {subtitle}
              </a>
            ))}
          </div>
        </Paper>
      </div>
    </>
  );
}
