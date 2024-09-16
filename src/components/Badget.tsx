export function Badget({
  text,
  info,
}: {
  text: string;
  info?: string | number;
}) {
  return (
    <div className="bg-[#111729] rounded-2xl flex justify-center gap-8 items-center px-5 py-4">
      <p className="text-[#4A5567]">{text}</p>
      <div className="w-0.5 h-10 bg-[#2D3748]"></div>
      <p className="text-[#CDD5E0]">
        {info ? info : <span className="text-[#4A5567]">No info</span>}
      </p>
    </div>
  );
}
