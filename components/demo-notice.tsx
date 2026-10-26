import { siteConfig } from "@/lib/site-config";

export default function DemoNotice() {
  if (!siteConfig.isDemo) return null;

  return (
    <div
      role="note"
      aria-label="Demo bildirimi"
      className="w-full bg-[#111411] border-b border-[#232A23] py-2 px-4 text-center"
    >
      <p className="text-[#A3AAA1] text-[0.6875rem] tracking-widest uppercase font-medium">
        <span className="text-[#B8F34A] mr-2">·</span>
        {siteConfig.demoNotice}
        <span className="text-[#B8F34A] ml-2">·</span>
      </p>
    </div>
  );
}
