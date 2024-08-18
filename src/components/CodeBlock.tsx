type CodeBlockProps = {
  code: string;
};

export default function CodeBlock(props: CodeBlockProps) {
  return (
    <div className="overflow-scroll bg-gray-800 border-2 border-gray-400 text-white selection:bg-white selection:text-black rounded-lg text-sm text-left px-5 py-4 w-full">
      <pre className="font-fira-code whitespace-pre-wrap">{props.code}</pre>
    </div>
  );
}
