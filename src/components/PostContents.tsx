export default function Contents(props: { subtitles: string[] }) {
  return (
    <div className="lg:block flex-[0.35] xl:flex-[0] xl:w-0 lg:sticky top-6 self-start">
      <p className="lg:hidden block sub2title mb-0">Contents</p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 lg:block lg:bg-gray-200/70 lg:rounded-lg lg:p-5 lg:ml-10 mb-16 lg:mt-6 lg:-mr-20 xl:-mr-60 2xl:-mr-80">
        <p className="hidden lg:block sub2title mt-0 pt-0">Contents</p>
        {props.subtitles.map((subtitle, index) => (
          <a
            key={index}
            href={`#${subtitle
              .replace(/\s+|\.+/g, "-")
              .replace(/[^a-zA-Z0-9-]/g, "")
              .toLowerCase()}`}
            className="text internal-link no-underline leading-6 block lg:mb-4"
          >
            {subtitle}
          </a>
        ))}
      </div>
    </div>
  );
}
