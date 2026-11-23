export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[300px] rounded-[38px] bg-[#141414] p-2.5 shadow-[0_18px_40px_rgba(20,20,20,0.18)]">
      <div className="flex h-[540px] flex-col overflow-hidden rounded-[30px] bg-white text-[#191919]">
        <div className="flex h-[26px] items-center justify-center">
          <span className="h-5 w-21 rounded-full bg-[#141414]" />
        </div>
        {children}
      </div>
    </div>
  );
}
