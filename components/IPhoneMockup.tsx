import Image from "next/image";
import clsx from "clsx";
import { basePath } from "@/lib/basePath";

export function IPhoneMockup({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative aspect-[9/19.5] bg-gradient-to-b from-[#4a4a4d] via-[#2a2a2c] to-[#151516] p-[2.5%] shadow-2xl",
        className
      )}
      style={{ borderRadius: "16% / 7%" }}
    >
      <div
        className="relative h-full w-full overflow-hidden border border-black/60 bg-black"
        style={{ borderRadius: "13% / 6%" }}
      >
        <Image src={`${basePath}/${src}`} alt={alt} fill sizes="220px" className="object-cover" />
        {/* Dynamic Island */}
        <div className="absolute top-[2.5%] left-1/2 h-[3%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}
