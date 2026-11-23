export function DocFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex aspect-[1/1.32] w-full max-w-[420px] flex-col rounded-md bg-white p-6 pb-5.5 text-[11.5px] leading-[1.45] text-[#191919] shadow-[0_18px_40px_rgba(20,20,20,0.16)]"
    >
      {children}
    </div>
  );
}
