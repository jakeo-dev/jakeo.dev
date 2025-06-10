export default function CodeBlock(props: { code: string }) {
  return (
    <div className="w-full overflow-scroll rounded-lg border-2 border-gray-400 bg-gray-800 px-5 py-4 text-left text-sm text-white selection:bg-white selection:text-black">
      <pre className="font-fira-code whitespace-pre-wrap">{props.code}</pre>
    </div>
  );
}
