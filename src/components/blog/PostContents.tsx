export default function PostContents(props: { subtitles: string[] }) {
  return (
    <div className="top-6 flex-[0.35] self-start lg:sticky lg:block xl:w-0 xl:flex-[0]">
      <p className="sub2title mb-0 block lg:hidden">Contents</p>
      <div className="mb-16 grid grid-cols-3 gap-x-6 gap-y-2 md:grid-cols-4 lg:mt-6 lg:-mr-20 lg:ml-10 lg:block lg:rounded-lg lg:bg-stone-200/70 lg:p-5 xl:-mr-60 2xl:-mr-80">
        <p className="sub2title mt-0 hidden pt-0 lg:block">Contents</p>
        {props.subtitles.map((subtitle, index) => (
          <a
            key={index}
            href={`#${subtitle
              .replace(/\s+|\.+/g, "-")
              .replace(/[^a-zA-Z0-9-]/g, "")
              .toLowerCase()}`}
            className="text internal-link block leading-6 no-underline lg:mb-4 last:lg:mb-0"
          >
            {subtitle}
          </a>
        ))}
      </div>
    </div>
  );
}
