export default function StickyNote(props: {
  children: React.ReactNode;
  className?: string;
  noteClassName?: string;
  bgColor?: number;
  clickable?: boolean;
  padding?: "none" | "small" | "medium" | "big";
}) {
  return (
    <div
      className={`relative ${props.clickable ? "cursor-pointer perspective-[1000px]" : ""} ${props.className || ""}`}
    >
      <div
        className={`rounded-b border-b-[1.5px] shadow-sm ${props.clickable ? "origin-top transform transition transform-3d hover:rotate-x-8 hover:rotate-y-0 hover:drop-shadow-md active:rotate-x-0 active:rotate-y-0 active:drop-shadow-none" : ""} ${props.padding == "none" ? "p-0" : props.padding == "small" ? "p-2 pt-3" : props.padding == "big" ? "p-8" : "p-4"} ${props.bgColor == 0 ? "border-red-500/50 bg-red-400/95 text-white" : props.bgColor == 1 ? "border-orange-500/50 bg-orange-400/95 text-white" : props.bgColor == 2 ? "border-yellow-400/50 bg-yellow-300/95 text-stone-700" : props.bgColor == 3 ? "border-lime-400/50 bg-lime-300/95 text-stone-700" : props.bgColor == 4 ? "border-emerald-600/50 bg-emerald-500/95 text-white" : props.bgColor == 5 ? "border-sky-600/50 bg-sky-500/95 text-white" : props.bgColor == 6 ? "border-blue-500/50 bg-blue-400/95 text-white" : props.bgColor == 7 ? "border-purple-500/50 bg-purple-400/95 text-white" : props.bgColor == 8 ? "border-amber-950/50 bg-amber-900/95 text-white" : "border-stone-200/50 bg-stone-100/95 text-stone-700"} ${props.noteClassName || ""}`}
      >
        {props.children}
      </div>
    </div>
  );
}
