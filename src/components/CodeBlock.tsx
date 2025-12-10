export default function CodeBlock(props: { code: string }) {
  return (
    <div className="w-full overflow-scroll rounded-lg border-2 border-stone-500 bg-stone-900 px-5 py-4 text-left text-sm text-white selection:bg-white selection:text-stone-800 shadow-md shadow-stone-500/30">
      <pre className="font-fira-code whitespace-pre-wrap">{props.code}</pre>
    </div>
  );
}
